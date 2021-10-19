import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Mainpage from './components/Mainpage';
import PokemonPage from './components/PokemonPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={'/'} component={Mainpage}/>
          <Route path={'/pokemon/:name'} component={PokemonPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
