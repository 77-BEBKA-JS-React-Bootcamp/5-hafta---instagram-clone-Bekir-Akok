import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import CommentMain from './Components/CommentMain/CommentMain';
import CommentHeader from './Components/CommentHeader/CommentHeader';
import CommentFooter from './Components/CommentFooter/CommentFooter';
import './app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App = () => {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/comments">
            <div className="home__container">
              <CommentHeader />
              <CommentMain/>
              <CommentFooter />
            </div>
          </Route>
          <Route path="/">
            <div className="home__container">
              <Header/>
              <Home/>
              <Footer/>
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
