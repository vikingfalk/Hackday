import { useEffect } from 'react';
import Game from './pages/Game';
import './App.css';

const App = () => {
  useEffect(() => {
    console.log('app');
  });

  return (
    <div className="App">
      <Game />
    </div>
  );
};

export default App;
