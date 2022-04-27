import { FunctionComponent, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useStoreState } from "../../stores/index.store";
import DashboardService from "../../services/dashboard.service";
import Dashboard from "../../../../node-src/build/models/dashboard.model";
import CaseOption from "../../../../node-src/build/models/option.model";
import { Button } from "../global/button";
import Stakeholder from "../../../../node-src/build/models/stakeholder.model";
import Care_Ethics_Options from "../../../../node-src/build/models/care_ethics_options.model";

interface CareEthicsHomeProps {}

const CareEthicsHome: FunctionComponent<CareEthicsHomeProps> = () => {
  const [options, setOptions] = useState<CaseOption[]>([]);
  const [stakeholders, setStakeholders] = useState<Stakeholder[]>([]);
  const [careEthics, setCareEthics] = useState<Care_Ethics_Options[]>([]);

  const currentDashboard =
    useStoreState((state) => state.dashboard.dashboard_id) ?? 0;
  const { isLoading, isError } = useQuery(
    "dashboard",
    async () => {
      return await DashboardService.getDashboard({ id: currentDashboard });
    },
    {
      onSuccess: (data) => {
        const dashboard = data.data as Dashboard;
        setOptions(dashboard.options);
        setStakeholders(dashboard.stakeholders);
        setCareEthics(dashboard.options[2 ?? 1]?.care_ethics_options ?? []);
      },
    }
  );

  const isComplete = () => {
    if (!careEthics.length || (careEthics.length*stakeholders.length) < (options.length*stakeholders.length)) {
      return false;
    }
    return true;
  };

  return (
    <div className="grid h-full content-between">
      <label className="text-3xl font-bold m-2">Care Ethics</label>
        <div className="text-lg flex justify-center">
          <Link to="/care-ethics" className="w-40">
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
  );
};

export default CareEthicsHome;
