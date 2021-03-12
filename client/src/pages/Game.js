import { useState, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Board from '../components/Board';
import ButtonEl from '../styledElements/Button';

const Game = () => {
  const [tries, setTries] = useState(0);
  const [finished, setFinished] = useState(false);
  const [matched, setMatched] = useState(false);
  const [failed, setFailed] = useState(false);
  const history = useHistory();
  const triesRef = useRef(tries);

  const incrementTries = () => {
    setTries(triesRef.current + 1);
  };

  const onMatched = bool => {
    if (bool) {
      setMatched(true);
      setTimeout(() => setMatched(false), 1000);
      return;
    }
    setFailed(true);
    setTimeout(() => setFailed(false), 1000);
  };

  useEffect(() => {
    triesRef.current = tries;
  }, [tries]);

  if (finished) {
    return (
      <div className="container container--column-center">
        <h1>Great job! You finished after {tries} tries.</h1>
        <section className="buttons-wrapper">
          <Link to="/">
            <ButtonEl>Home</ButtonEl>
          </Link>
          <ButtonEl onClick={() => history.go(0)} again>Play Again</ButtonEl>
        </section>
      </div>
    );
  }

  return (
    <div className="container container--column-center">
      <Link to="/">
        <span className="btn-home">
          <span className="material-icons btn-home__icon">exit_to_app</span>
          Home
        </span>
      </Link>
      <h1 className="counter">Tries: {tries}</h1>
      <p className="tips">Tips: Use the spacebar to match</p>
      {matched && <p className="matched">Good job!</p>}
      {failed && <p className="failed">Oops!</p>}
      <Board incrementTries={incrementTries} setFinished={setFinished} onMatched={onMatched} />
    </div>
  );
};

export default Game;
