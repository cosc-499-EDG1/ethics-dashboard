import { FunctionComponent, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Stakeholder from "../../../../node-src/build/models/stakeholder.model";
import Virtue from "../../../../node-src/build/models/virtue.model";
import dashboardService from "../../services/dashboard.service";
import virtuesService from "../../services/virtues.service";
import { useStoreState } from "../../stores/index.store";
import VirtueEthicsStakeholderInput from "./virtueEthicsProps/virtueEthics-stakeholderInputs";

interface VirtueEthicsProps {}

const VirtueEthicsStakeholders: FunctionComponent<VirtueEthicsProps> = () => {
  const [virtues, setVirtues] = useState<Virtue[]>([]);
  const { isLoading, isError } = useQuery(
    "virtues",
    virtuesService.getVirtues,
    {
      onSuccess: (data) => {
        setVirtues(data.data);
      },
    }
  );

  const [stakeholders, setStakeholders] = useState<Stakeholder[]>([]);

  const currentDashboard =
    useStoreState((state) => state.dashboard.dashboard_id) ?? 0;

  useQuery(
    "dashboard",
    async () => {
      return await dashboardService.getDashboard({ id: currentDashboard });
    },
    {
      onSuccess: (data) => {
        setStakeholders(data.data.stakeholders);
      },
    }
  );

  return (
    <div className="site-dashboard">
      <div className="dashboard-title">
        <div className="dashboard-title-text">
          <h1>Virtue Ethics</h1>
        </div>
        <div className="dashboard-title-description">
          <p>
            Consider the context. The virtues are practiced (and understood) in
            the context of a community. Identify the relevant virtues and vices
            relevant to the stakeholder interests you’ve listed
          </p>
        </div>
      </div>

      {virtues.map((v) => (
        <div className="capitalize">
          {v.excess} - {v.mean} - {v.deficiency}
        </div>
      ))}

      {stakeholders.map((s) => (
        <div className="capitalize">
          {s.title} - {s.description} - {s.virtue_value} -{" "}
          {s.virtue?.virtue.mean} - {s.virtue?.virtue.excess} -{" "}
          {s.virtue?.virtue.deficiency}
        </div>
      ))}

      <div className="dashboard-page md:flex">
        <div className="dashboard-block w-1/2 mr-2">
          <label className="dashboard-block-title">
            Stakeholders
            <p className="dashboard-block-description">
              Move slider to align with option prompt
            </p>
            <VirtueEthicsStakeholderInput
              stakeholder={{
                id: 1,
                prompt: "Wealth (10)",
                excess: "Greed",
                mean: "Frugality",
                deficiency: "Generosity",
              }}
            />
            <VirtueEthicsStakeholderInput
              stakeholder={{
                id: 2,
                prompt: "Prestige (7)",
                excess: "Vanity",
                mean: "Self Confidence",
                deficiency: "Modesty",
              }}
            />
            <VirtueEthicsStakeholderInput
              stakeholder={{
                id: 3,
                prompt: "Integrity (3)",
                excess: "Righteous Indignation",
                mean: "Integrity",
                deficiency: "Wickedness",
              }}
            />
          </label>
        </div>

        <div className="dashboard-block-1 w-1/2 ml-2">
          <header className="dashboard-block-title mb-4">
            Options ranked by most virtuous
          </header>
          <div className="dashboard-block">
            <label className="dashboard-block-title">
              Stakeholder 3
              <p className="dashboard-block-description">Integrity</p>
              <div className="h-24 my-2 flex justify-center items-center bg-white">
                <p className="inline mx-3">Virtue</p>
                <input type="range" min="1" max="10" value="2"></input>
                <p className="inline mx-3">Vice</p>
              </div>
            </label>
          </div>
          <div className="dashboard-block">
            <label className="dashboard-block-title">
              Stakeholder 2
              <p className="dashboard-block-description">Prestige</p>
              <div className="h-24 my-2 flex justify-center items-center bg-white">
                <p className="inline mx-3">Virtue</p>
                <input type="range" min="1" max="10" value="3"></input>
                <p className="inline mx-3">Vice</p>
              </div>
            </label>
          </div>
          <div className="dashboard-block">
            <label className="dashboard-block-title">
              Stakeholder 1<p className="dashboard-block-description">Greed</p>
              <div className="h-24 my-2 flex justify-center items-center bg-white">
                <p className="inline mx-3">Virtue</p>
                <input type="range" min="1" max="10" value="9"></input>
                <p className="inline mx-3">Vice</p>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center m-6">
        <div className="grid grid-cols-2 gap-4">
          <Link to="/virtueEthics-Character">
            <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Go Back
            </button>
          </Link>
          <Link to="/virtueEthics-RankBalance">
            <button className="bg-primary hover:brightness-125 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VirtueEthicsStakeholders;
