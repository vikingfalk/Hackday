import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';

const Board = () => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState([]);

  const mapPictureCards = countriesData => countriesData.map(country => ({
    id: uuidv4(),
    type: 'picture',
    country: country.name,
    pictureURL: country.pictureURL,
    selected: false,
  }));

  const mapFlagCards = countriesData => countriesData.map(country => ({
    id: uuidv4(),
    type: 'flag',
    country: country.name,
    flagURL: country.flagURL,
    selected: false,
  }));

  const toggleSelected = (id, type) => {
    switch (selected.length) {
      case 0:
        setSelected([{ id, type }]);
        break;
      case 1:
        setSelected(selected[0].type === type
          ? [{ id, type }]
          : [...selected, { id, type }]);
        break;
      case 2:
        setSelected(selected.map(select => (
          select.type === type
            ? ({ id, type })
            : select)));
        break;
      default:
        setSelected([]);
    }
  };

  useEffect(() => {
    console.log(selected);
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
        setCards([...flagCards, ...pictureCards]);
      });
  }, []);

  return (
    <section>
      <h1>Board</h1>
      {error && <p>{error}</p>}
      {cards && cards.map(card => (
        <Card key={card.id} card={card} toggleSelected={toggleSelected} />
      ))}
    </section>
  );
};

export default Board;
