import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Auth/Login/Login";
import Signup from "./Components/Auth/Signup/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/"
          component={() => <Home child={Login} title="Login" />}
          exact
        />
        <Route
          path="/login"
          component={() => <Home child={Login} title="Login" />}
        />
        <Route
          path="/signup"
          component={() => <Home child={Signup} title="Sign Up" />}
        />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
