import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./components/functional-components/privateroute.component";
import Navbar from "./components/navbar";
import Stakeholders from "./components/stakeholders/stakeholders";

import UtilitarianismOptions from "./components/utilitarianism/utilitarianism-options";
import UtilitarianismStakeholders from "./components/utilitarianism/utilitarianism-stakeholders";
import UtilitarianismPleasure from "./components/utilitarianism/utilitarianism-pleasure";

import DeontologyOptions from "./components/deontology/deontology-options";
import DeontologyHypothetical from "./components/deontology/deontology-hypothetical";
import DeontologyCategorical from "./components/deontology/deontology-categorical";
import DeontologyTestingCategorical from "./components/deontology/deontology-testing-categorical";
import DeontologyMoralLaw from "./components/deontology/deontology-moral-law";

import { StoreProvider } from "easy-peasy";
import MainStore from "./stores/index.store";

import './styles/main.css';

import Home from "./components/home/home";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Issues from "./components/Issues/Issues";
import Logout from "./components/login/logout";
import MyAccount from "./components/account/myaccount";
import DashboardHome from "./components/dashboard-home/dashboard-home";


function App() {
  return (
    <Router>
      <StoreProvider store={MainStore}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/Issues" component={Issues} />
            <Route path="/dashboard" component={DashboardHome}/>
           
            <Route path="/stakeholders" component={Stakeholders} />
            <Route path="/utilitarianism-options" component={UtilitarianismOptions} />
            <Route path="/utilitarianism-stakeholders" component={UtilitarianismStakeholders} />
            <Route path="/utilitarianism-pleasure" component={UtilitarianismPleasure} />
            <Route path="/deontology-options" component={DeontologyOptions} />
            <Route path="/deontology-hypothetical" component={DeontologyHypothetical} />
            <Route path="/deontology-categorical" component={DeontologyCategorical} />
            <Route path="/deontology-testing-categorical" component={DeontologyTestingCategorical} />
            <Route path="/deontology-moral-law" component={DeontologyMoralLaw} />
            <Route path="/logout" component={Logout} />
            <PrivateRoute
              exact
              path={"/myaccount"}
              component={MyAccount}
            />
          </Switch>
        </div>
      </StoreProvider>
    </Router>
  );
}

export default App;
