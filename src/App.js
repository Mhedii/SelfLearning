//import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import OurService from './components/OurService/OurService';
import ContactUS from './components/ContactUs/ContactUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <h1 className="text-warning"><span className="text-danger">Self</span >Learning</h1>

      <Router>

        <Header></Header>
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <ContactUS></ContactUS>
          </Route>
          <Route path="/service">
            <OurService></OurService>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="*">
            <NotFound></NotFound>
          </Route>


        </Switch>
        <Footer></Footer>
      </Router>
    </div >
  );
}

export default App;
