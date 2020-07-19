import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ChatScreen from './components/pages/ChatScreen/ChatScreen';

export const Routes = () => (
    <Switch>
      <Route exact path='/' component={ChatScreen} />
    </Switch>
);
export default Routes;