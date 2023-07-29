import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Post from './pages/Post';
import UpdatePost from './pages/UpdatePost';
import PostWall from './pages/PostWall';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/update" component={UpdatePost} />
        <PrivateRoute exact path="/create-post" component={Post} />
        <PrivateRoute exact path="/" component={PostWall} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

export default App;
