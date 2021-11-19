import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/functional-components/privateroute.component";
import Home from "./components/home/home";
import Navbar from "./components/navbar";
import Stakeholders from "./components/stakeholders/stakeholders";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login">
            <div>Login Component</div>
          </Route>
          <Route path="/dashboard">
            <div>Dashboard Component</div>
          </Route>
          <Route path="/stakeholders" component={Stakeholders} />
          <PrivateRoute
            authed={true} // TODO: Replace with isLoggedIn function
            exact
            path={"/myaccount"}
            component={Home}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
