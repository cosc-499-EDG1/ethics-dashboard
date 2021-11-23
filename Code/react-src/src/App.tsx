import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/functional-components/privateroute.component";
import Navbar from "./components/navbar";
import Stakeholders from "./components/stakeholders/stakeholders";

import UtilitarianismOptions from "./components/utilitarianism/utilitarianism-options";
import UtilitarianismStakeholders from "./components/utilitarianism/utilitarianism-stakeholders";
import UtilitarianismPleasure from "./components/utilitarianism/utilitarianism-pleasure";

import { StoreProvider } from "easy-peasy";
import MainStore from "./stores/main.store";

import Home from "./components/home/home";
import Login from "./components/login/login";


function App() {
  return (
    <Router>
      <StoreProvider store={MainStore}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard">
              <div>Dashboard Component</div>
            </Route>
            <Route path="/stakeholders" component={Stakeholders} />
            <Route path="/utilitarianism-options" component={UtilitarianismOptions} />
            <Route path="/utilitarianism-stakeholders" component={UtilitarianismStakeholders} />
            <Route path="/utilitarianism-pleasure" component={UtilitarianismPleasure} />
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
