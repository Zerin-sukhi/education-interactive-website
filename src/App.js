import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import About from './component/About/About';
import Course from './component/Course/Course';
import NotFound from './component/NotFound/NotFound';
import Platform from './component/Platform/Platform';


function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/course">
            <Course></Course>
          </Route>
          <Route path="/platform">
            <Platform></Platform>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>

    </div>
  );
}

export default App;
