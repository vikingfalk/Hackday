import { useState } from 'react';
import Board from '../components/Board';

const Game = () => {
  const [tries, setTries] = useState(0);
  const [finished, setFinished] = useState(false);

  const incrementTries = () => {
    setTries(tries + 1);
  };

  return (
    <div className="container container--column-center">
      {finished ? <h1>Good job! You finished after {tries} tries.</h1>
        : <>
          <h1 className="counter">Tries: {tries}</h1>
          <Board incrementTries={incrementTries} setFinished={setFinished} />
        </>
      }
    </div>
  );
};

export default Game;
