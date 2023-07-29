// App.js

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import CreatePost from './CreatePost';
// import UpdatePost from './UpdatePost';
// import DeletePost from './DeletePost';
import GetAllPosts from './pages/PostWall';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        {/* <PrivateRoute exact path="/create-post" component={CreatePost} /> */}
        {/* <PrivateRoute exact path="/update-post/:id" component={UpdatePost} />
        <PrivateRoute exact path="/delete-post/:id" component={DeletePost} />
        <PrivateRoute exact path="/get-all-posts" component={GetAllPosts} /> */}
        <PrivateRoute exact path="/" component={GetAllPosts} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

export default App;
