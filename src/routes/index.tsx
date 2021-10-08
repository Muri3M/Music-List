import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import MyPlayList from '../pages/MyPlayList';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/MinhaPlayList" component={MyPlayList} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
