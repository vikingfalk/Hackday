import { useState, useEffect } from 'react';
import { mapPictureCards, mapFlagCards } from '../helpers';
import Card from './Card';
import ButtonEl from '../styledElements/Button';

const Board = ({ incrementTries, setFinished }) => {
  const [cards, setCards] = useState(null);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState([]);

  const toggleSelected = card => {
    switch (selected.length) {
      case 0:
        setSelected([card]);
        break;
      case 1:
        setSelected(selected[0].type === card.type
          ? [card]
          : [...selected, card]);
        break;
      case 2:
        setSelected(selected.map(select => (
          select.type === card.type
            ? card
            : select)));
        break;
      default:
        setSelected([]);
    }
  };

  const shuffleArray = array => array.sort(() => 0.5 - Math.random());

  const checkMatch = () => {
    if (selected[0].country === selected[1].country) {
      setCards(cards.filter(card => card.country !== selected[0].country));
    }
    setSelected([]);
    incrementTries();
  };

  useEffect(() => {
    if (cards && cards.length === 0) {
      setFinished(true);
    }
  }, [cards]);

  useEffect(() => {
    if (!cards) {
      return;
    }

    setCards(cards.map(card => (selected.some(select => select.id === card.id) ? ({
      ...card,
      selected: true,
    })
      : ({
        ...card,
        selected: false,
      })
    )));
  }, [selected]);

  useEffect(() => {
    fetch('http://localhost:8080')
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError('Error loading cards');
          return;
        }
        const flagCards = mapFlagCards(data);
        const pictureCards = mapPictureCards(data);
        setCards([...shuffleArray(flagCards), ...shuffleArray(pictureCards)]);
      });
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      <section className="board">
        <section className="board__column">
          {cards && cards.filter(card => card.type === 'flag').map(card => (
            <Card key={card.id} card={card} toggleSelected={toggleSelected} />
          ))}
        </section>
        <section className="board__column">
          {cards && cards.filter(card => card.type === 'picture').map(card => (
            <Card key={card.id} card={card} toggleSelected={toggleSelected} />
          ))}
        </section>
      </section>
      <ButtonEl
        onClick={selected.length === 2 ? checkMatch : () => {}}
        disabled={selected.length < 2}
        match
      >
        Match
      </ButtonEl>
    </>
  );
};

export default Board;
