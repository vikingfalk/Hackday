import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Game from './pages/Game';
import Home from './pages/Home';
import './App.css';

const App = () => {
  useEffect(() => {
    console.log('app');
  });

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/game" component={Game} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
