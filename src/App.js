import React, { createContext, useEffect, useReducer, useState } from "react";
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
import Buy from "./components/Buy/Buy/Buy";


// user context
export const UserContext = createContext();

// usereducer USER STATE initialstate
const initialState = {
  name: '',
  email: ''
}
// USER STATE  reducer function
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
  // User state
  const [user, dispatch] = useReducer(reducer, initialState)

  // Initializing AOS
  useEffect(() => {
    AOS.init();
  }, []);

  // Loading Spinner
  const [Load, setLoad] = useState(true)

  useEffect(() => {
    const theLoader = document.querySelector(".loader");
    let spinnerDiv = document.querySelector(".spinner_div");
    if (theLoader) {
      theLoader.remove();
      spinnerDiv.classList.add("hidden");
      setLoad(false)
    }
  }, [])


  if (Load) {
    return null
  }
  console.log(user);
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
          <Route path="/service/buy">
            <Buy></Buy>
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
