import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ButtonEl from '../styledElements/Button';
import traveller from '../assets/traveller.png';
import world from '../assets/worldwide.png';
import plane from '../assets/airplane.png';

const Home = () => {
  useEffect(() => {
    console.log('home page loaded');
  }, []);

  return (
    <div className="container container--column-center">
      <h1 className="main-heading">Quarantine Traveler</h1>
      <h2 className="sub-heading">Pretend there is no virus and go travel!</h2>
      <Link to="/game">
        <ButtonEl main start>Start Game</ButtonEl>
      </Link>
      <img className="img-world" src={world} />
      <img className="img-traveller" src={traveller} />
      <img className="img-plane" src={plane} />
    </div>
  );
};

export default Home;
