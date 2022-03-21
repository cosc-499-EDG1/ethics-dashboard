import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./components/functional-components/privateroute.component";
import Navbar from "./components/navbar";
import Stakeholders from "./components/stakeholders/stakeholders";

import UtilitarianismOptions from "./components/utilitarianism/utilitarianism-options";
import UtilitarianismStakeholders from "./components/utilitarianism/utilitarianism-stakeholders";
import UtilitarianismPleasure from "./components/utilitarianism/utilitarianism-pleasure";
import UtilitarianismSummary from "./components/utilitarianism/utilitarianism-summary";

import DeontologyOptions from "./components/deontology/deontology-options";
import DeontologyHypothetical from "./components/deontology/deontology-hypothetical";
import DeontologyCategorical from "./components/deontology/deontology-categorical";
import DeontologyTestingCategorical from "./components/deontology/deontology-testing-categorical";
import DeontologyMoralLaw from "./components/deontology/deontology-moral-law";

import VirtueEthicsBall from "./components/virtueEthics/VirtueEthics-Ball";
import VirtueEthicsCharacter from "./components/virtueEthics/virtueEthics-Character";
import VirtueEthicsStakeholders from "./components/virtueEthics/virtueEthics-Stakeholders";
import VirtueEthicsRankBal from "./components/virtueEthics/virtueEthics-RankBalance";
import VirtueEthicsBallBalanced from "./components/virtueEthics/VirtueEthics-BallBalanced";
import CareEthics from "./components/care/care-ethics";

import MyProgressReport from "./components/my-progress/my-progress-report";

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
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
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
            <Route path="/utilitarianism-summary" component={UtilitarianismSummary} />
            <Route path="/deontology-options" component={DeontologyOptions} />
            <Route path="/deontology-hypothetical" component={DeontologyHypothetical} />
            <Route path="/deontology-categorical" component={DeontologyCategorical} />
            <Route path="/deontology-testing-categorical" component={DeontologyTestingCategorical} />
            <Route path="/deontology-moral-law" component={DeontologyMoralLaw} />
            <Route path="/virtueEthics-Ball" component={VirtueEthicsBall} />
            <Route path="/virtueEthics-BallBalanced" component={VirtueEthicsBallBalanced} />
            <Route path="/virtueEthics-Character" component={VirtueEthicsCharacter} />
            <Route path="/virtueEthics-Stakeholders" component={VirtueEthicsStakeholders} />
            <Route path="/virtueEthics-RankBalance" component={VirtueEthicsRankBal} />
            <Route path="/care-ethics" component={CareEthics} />
            <Route path="/my-progress-report" component={MyProgressReport} />
            <Route path="/logout" component={Logout} />
            <PrivateRoute
              exact
              path={"/myaccount"}
              component={MyAccount}
            />
          </Switch>
        </div>
      </StoreProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;