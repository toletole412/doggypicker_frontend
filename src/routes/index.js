import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './Home';
import daily from './daily';
import developer from './developer';
import content from './2017:11:13:place';

export default () => (
  <BrowserRouter>
   <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/daily/" exact component={daily} />
      <Route path="/front developer/" exact component={developer} />
      <Route path="/2017/11/13/place/" exact component={content} />
   </Switch>
  </BrowserRouter>
);
