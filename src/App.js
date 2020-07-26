import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Weather from './container/Weather'
import SingleCard from './components/SingleCard/SingleCard'
import Nav from './components/Navigation/Nav'
function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path='/' exact component={Weather} />
        <Route path='/:date' component={SingleCard} />
      </Switch>
    </>
  );
}

export default App;
