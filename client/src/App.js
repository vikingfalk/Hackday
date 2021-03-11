import { useEffect } from 'react';
import Board from './components/Board';
import './App.css';

const App = () => {
  useEffect(() => {
    console.log('app');
  });

  return (
    <div className="App">
      <h1>Test</h1>
      <Board />
    </div>
  );
};

export default App;
