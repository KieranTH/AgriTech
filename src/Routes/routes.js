import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from '../Pages/Home/Home/Home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
  </Route>

);
