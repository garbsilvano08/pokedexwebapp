import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Mainpage from './components/Mainpage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={'/'} component={Mainpage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
