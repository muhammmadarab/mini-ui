import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import PostWall from './pages/PostWall';
import PrivateRoute from './components/PrivateRoute';
import SinglePostView from './pages/SinglePostView';
import ImageFeed from './pages/ImageFeed';
import VideoFeed from './pages/VideoFeed';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/update" component={UpdatePost} />
        <PrivateRoute exact path="/create-post" component={CreatePost} />
        <PrivateRoute exact path="/" component={PostWall} />
        <PrivateRoute exact path="/view/post/images" component={ImageFeed} />
        <PrivateRoute exact path="/view/post/videos/:id" component={VideoFeed} />
        {/* <Redirect to="/login" /> */}
      </Switch>
    </Router>
  );
};

export default App;
