import React from 'react'
import Tugas11 from './tugas11/tugas11';
import Tugas12 from './tugas12/tugas12';
import Tugas13 from './tugas13/tugas13';
import Tugas14 from './tugas14/tugas14';
import Tugas15 from './tugas15/tugas15';

import { Switch, Route } from "react-router";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Tugas11 />
      </Route>
      <Route exact path="/tugas12">
        <Tugas12 start={100}/>
      </Route>
      <Route exact path="/tugas13">
        <Tugas13 />
      </Route>
      <Route exact path="/tugas14">
        <Tugas14 />
      </Route>
      <Route exact path="/tugas15">
        <Tugas15 />
      </Route>
    </Switch>
  );
};

export default Routes;