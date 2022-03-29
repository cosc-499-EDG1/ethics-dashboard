import { FunctionComponent, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useStoreState } from "../../stores/index.store";
import DashboardService from "../../services/dashboard.service";
import Dashboard from "../../../../node-src/build/models/dashboard.model";
import CaseOption from "../../../../node-src/build/models/option.model";
import { Button } from "../global/button";
import Stakeholder from "../../../../node-src/build/models/stakeholder.model";
import { StakeholderInputData } from "../stakeholders/stakeholders";

interface StakeholdersHomeProps {}

const StakeholdersHome: FunctionComponent<StakeholdersHomeProps> = () => {
  const [stakeholders, setStakeholders] = useState<StakeholderInputData[]>([
    { title: "", description: "" },
    { title: "", description: "" },
  ]);

  const currentDashboard =
    useStoreState((state) => state.dashboard.dashboard_id) ?? 0;
  const { isLoading, isError } = useQuery(
    "dashboard",
    async () => {
      return await DashboardService.getDashboard({ id: currentDashboard });
    },
    {
      onSuccess: (data) => {
        setStakeholders(
          data.data.stakeholders.map((o: Stakeholder) => {
            return {
              title: o.title,
              description: o.description,
            };
          })
        );
      },
    }
  );

  const isComplete = () => {
    if (!stakeholders.length || stakeholders.length < 5) {
      return false;
    }
    return true;
  };

  return (
    <div className="grid h-full content-between">
      <label className="font-bold m-2">Stakeholders</label>
      {!!stakeholders.length && (
        <div className="text-lg">
          <div className="text-lg max-h-92 overflow-y-auto">
            {stakeholders.map((stakeholder, i) => (
              <div key={i}>
                <p className="mx-2 my-2 py-2 rounded-md bg-secondary">
                  {stakeholder.title.slice(0, 200)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div>
        <div className="text-lg flex justify-center mt-2">
          <Link to="/stakeholders" className="w-64">
            <Button text="View Page"></Button>
          </Link>
        </div>
        <p
          className={`mx-2 my-2 py-2 font-bold text-xl rounded-md ${
            isComplete() ? "bg-success" : "bg-error"
          }`}
        >
          {isComplete() ? "Complete" : "Incomplete"}
        </p>
      </div>
    </div>
  );
};

export default StakeholdersHome;
