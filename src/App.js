import React, { createContext, useEffect, useReducer } from "react";
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
import ServicePlan from "./components/ServicePlan/ServicePlan";


// user context
export const UserContext = createContext();

// usereducer initialstate
const initialState = {
  name: '',
  email: ''
}
// the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "USERINFO":
      return {
        name: action.name,
        email: action.email
      }
    default:
      return state
  }
}

function App() {
  // Initializing AOS
  useEffect(() => {
    AOS.init();
  }, []);

  const [user, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={{ dispatch }}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services/:category">
            <ServicePlan></ServicePlan>
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
    </UserContext.Provider>
  );
}

export default App;
