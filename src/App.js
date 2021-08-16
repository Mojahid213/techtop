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
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import axios from "axios";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";


// // user context
export const UserContext = createContext();

// usereducer USER STATE initialstate
const initialState = {
  name: '',
  email: '',
  avatar: '',
}
// USER STATE  reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "USERINFO":
      return {
        name: action.name,
        email: action.email,
        avatar: action.avatar,
      }
    default:
      return state
  }
}

function App() {
  // User state
  const [user, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem('token'))) {
      axios.get('http://localhost:5000/users/me', {
        headers: {
          Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token')).jwt}`
        }
      })
        .then(res => {
          const userName = res.data.username;
          const nameSplit = userName.split(' ', 2);
          if (nameSplit.length > 1) {
            const firstLetter = nameSplit[0].split('')[0];
            const lastLetter = nameSplit[1].split('')[0];
            const theLetter = firstLetter + lastLetter;
            dispatch({
              type: 'USERINFO',
              name: res.data.username,
              email: res.data.email,
              avatar: theLetter
            })
          } else {
            const theLetter = nameSplit[0].split('')[0];
            dispatch({
              type: 'USERINFO',
              name: res.data.username,
              email: res.data.email,
              avatar: theLetter
            })
          }
        })
        .then(err => {
          if (err) {
            console.log(err)
          }
        })
    }
  }, [])

  // Initializing AOS
  useEffect(() => {
    AOS.init();
  }, []);

  // Loading Spinner state
  const [Load, setLoad] = useState(true)
  // Showing and removing the Loading Spinner
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

  return (
    <UserContext.Provider value={[user, dispatch]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services/:category">
            <ServicePlan></ServicePlan>
          </Route>
          <PrivateRoute path="/service/buy">
            <Buy></Buy>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
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
