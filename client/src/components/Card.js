import { useEffect } from 'react';
import CardEl from '../styledElements/Card';

const Card = ({ card, toggleSelected }) => {
  useEffect(() => {
    console.log('hej');
  });

  return (
    <CardEl onClick={() => toggleSelected(card)} selected={card.selected}>
      <img src={card.type === 'picture' ? card.pictureURL : card.flagURL} />
    </CardEl>
  );
};

export default Card;
