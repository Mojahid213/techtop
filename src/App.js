import React, { useEffect } from "react";
import Home from "./components/Home/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Login from "./components/Login/Login";
import NotMatch from "./components/NotMatch/NotMatch";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotMatch></NotMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
