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

import { StoreProvider, useStoreRehydrated } from "easy-peasy";
import MainStore from "./stores/index.store";

import "./styles/main.css";

import Home from "./components/home/home";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Issues from "./components/Issues/Issues";
import Logout from "./components/login/logout";
import MyAccount from "./components/account/myaccount";
import DashboardHome from "./components/dashboard-home/dashboard-home";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function WaitForStateRehydration({ children }: any) {
  const isRehydrated = useStoreRehydrated();
  return isRehydrated ? children : null;
}

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <StoreProvider store={MainStore}>
          <WaitForStateRehydration>
            <div className="App">
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <PrivateRoute path="/issues" component={Issues} />
                <PrivateRoute path="/dashboard" component={DashboardHome} />

                <PrivateRoute path="/stakeholders" component={Stakeholders} />
                <PrivateRoute
                  path="/utilitarianism-options"
                  component={UtilitarianismOptions}
                />
                <PrivateRoute
                  path="/utilitarianism-stakeholders"
                  component={UtilitarianismStakeholders}
                />
                <PrivateRoute
                  path="/utilitarianism-pleasure"
                  component={UtilitarianismPleasure}
                />
                <PrivateRoute
                  path="/utilitarianism-summary"
                  component={UtilitarianismSummary}
                />
                <PrivateRoute
                  path="/deontology-options"
                  component={DeontologyOptions}
                />
                <PrivateRoute
                  path="/deontology-hypothetical"
                  component={DeontologyHypothetical}
                />
                <PrivateRoute
                  path="/deontology-categorical"
                  component={DeontologyCategorical}
                />
                <PrivateRoute
                  path="/deontology-testing-categorical"
                  component={DeontologyTestingCategorical}
                />
                <PrivateRoute
                  path="/deontology-moral-law"
                  component={DeontologyMoralLaw}
                />
                <PrivateRoute path="/virtueEthics-Ball" component={VirtueEthicsBall} />
                <PrivateRoute
                  path="/virtueEthics-BallBalanced"
                  component={VirtueEthicsBallBalanced}
                />
                <PrivateRoute
                  path="/virtueEthics-Character"
                  component={VirtueEthicsCharacter}
                />
                <PrivateRoute
                  path="/virtueEthics-Stakeholders"
                  component={VirtueEthicsStakeholders}
                />
                <PrivateRoute
                  path="/virtueEthics-RankBalance"
                  component={VirtueEthicsRankBal}
                />
                <PrivateRoute path="/care-ethics" component={CareEthics} />
                <PrivateRoute
                  path="/my-progress-report"
                  component={MyProgressReport}
                />
                <PrivateRoute path="/logout" component={Logout} />
                <PrivateRoute exact path={"/myaccount"} component={MyAccount} />
              </Switch>
            </div>
          </WaitForStateRehydration>
        </StoreProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
