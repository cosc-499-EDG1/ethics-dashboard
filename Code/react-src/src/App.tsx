import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/functional-components/privateroute.component";
import Navbar from "./components/navbar";
import Stakeholders from "./components/stakeholders/stakeholders";
<<<<<<< Updated upstream
=======

import UtilitarianismOptions from "./components/utilitarianism/utilitarianism-options";
import UtilitarianismStakeholders from "./components/utilitarianism/utilitarianism-stakeholders";
import UtilitarianismPleasure from "./components/utilitarianism/utilitarianism-pleasure";

import DeontologyOptions from "./components/deontology/deontology-options";
import DeontologyHypothetical from "./components/deontology/deontology-hypothetical";
import DeontologyCategorical from "./components/deontology/deontology-categorical";

import VirtueEthicsCharacter from "./components/virtueEthics/virtueEthics-Character";
import VirtueEthicsStakeholders from "./components/virtueEthics/virtueEthics-Stakeholders";
import VirtueEthicsRankBal from "./components/virtueEthics/virtueEthics-RankBalance";
import VirtueEthicsBall from "./components/virtueEthics/virtueEthics-Ball";

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
            <Route path="/utilitarianism-options" component={UtilitarianismOptions} />
            <Route path="/utilitarianism-stakeholders" component={UtilitarianismStakeholders} />
            <Route path="/utilitarianism-pleasure" component={UtilitarianismPleasure} />
            <Route path="/deontology-options" component={DeontologyOptions} />
            <Route path="/deontology-hypothetical" component={DeontologyHypothetical} />
            <Route path="/deontology-categorical" component={DeontologyCategorical} />
            <Route path="/virtueEthics-Ball" component={VirtueEthicsBall} />
            <Route path="/virtueEthics-Character" component={VirtueEthicsCharacter} />
            <Route path="/virtueEthics-Stakeholders" component={VirtueEthicsStakeholders} />
            <Route path="/virtueEthics-RankBalance" component={VirtueEthicsRankBal} />
            
            
            <Route path="/logout" component={Logout} />
>>>>>>> Stashed changes
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
