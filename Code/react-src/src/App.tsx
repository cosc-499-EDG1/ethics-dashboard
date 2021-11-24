import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/functional-components/privateroute.component";
import Navbar from "./components/navbar";
import Stakeholders from "./components/stakeholders/stakeholders";
import { StoreProvider } from "easy-peasy";
import MainStore from "./stores/main.store";


import Home from "./components/home/home";
import Login from "./components/login/login";
import Issues from "./components/Issues/Issues";

function App() {
  return (
    <Router>
      <StoreProvider store={MainStore}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/Issues" component={Issues} />
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
      </StoreProvider>
    </Router>
  );
}

export default App;
