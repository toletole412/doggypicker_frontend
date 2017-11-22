import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './Home';
import daily from './daily';
import developer from './developer';
import content from './2017:11:13:place';
import content2 from './2017:11:19:develope.discus';
import content3 from './2017:11:20:develope';



export default () => (
  <BrowserRouter>
   <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/daily/" exact component={daily} />
      <Route path="/front developer/" exact component={developer} />
      <Route path="/2017/11/13/place/" exact component={content} />
      <Route path="/2017/11/19/develope.discus/" exact component={content2} />
      <Route path="/2017/11/20/develope/" exact component={content3} />
   </Switch>
  </BrowserRouter>
);
