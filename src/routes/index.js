import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Grid_AllDogs from './Grid_AllDogs';
import Grid_Match from './Grid_Match';
import Grid_Top10 from './Grid_Top10';
import LoginPage from './LoginPage';


export default () => (
  <BrowserRouter>
   <Switch>
      <Route path="/login" exact component={LoginPage} />
      <Route path="/Grid_AllDogs/" exact component={Grid_AllDogs} />
      <Route path="/Grid_Match/" exact component={Grid_Match} />
      <Route path="/Grid_Top10/" exact component={Grid_Top10} />
   </Switch>
  </BrowserRouter>
);
