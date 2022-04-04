import { FunctionComponent, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useStoreState } from "../../stores/index.store";
import DashboardService from "../../services/dashboard.service";
import Dashboard from "../../../../node-src/build/models/dashboard.model";
import CaseOption from "../../../../node-src/build/models/option.model";
import { Button } from "../global/button";

interface EthicalIssueProps {}

const EthicalIssue: FunctionComponent<EthicalIssueProps> = () => {
  const [summary, setSummary] = useState("");
  const [dilemmas, setDilemmas] = useState("");
  const [role, setRole] = useState("");
  const [options, setOptions] = useState(["", ""]);

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
        setSummary(dashboard.summary);
        setDilemmas(dashboard.dilemmas);
        setRole(dashboard.role);
        setOptions(dashboard.options.map((o) => o.option_desc));
      },
    }
  );

  const isComplete = () => {
    if (!summary || !dilemmas || !role || !options.length) {
      return false;
    }
    return true;
  };

  return (
    <div className="grid h-full content-between">
      <label className="font-bold m-2">Ethical Issue</label>
      <div className="text-lg">
        {summary && (
          <div>
            <label className="font-bold m-2">Summary</label>
            <br />
            {summary.slice(0, 200)}...
          </div>
        )}
        {/* {dilemmas && (
          <div>
            <label className="font-bold m-2">Dilemmas</label>
            <br />
            {dilemmas.slice(0, 200)}...
          </div>
        )}
        {role && (
          <div>
            <label className="font-bold m-2">Role</label>
            <br />
            {role.slice(0, 200)}...
          </div>
        )} */}
      </div>
      {!!options.length && (
        <div className="text-lg">
          <label className="font-bold m-2">Options</label>
          <br />
          <div className="text-lg max-h-40 overflow-y-auto">
            {options.map((option, i) => (
              <div key={i}>
                <p className="mx-2 my-2 py-2 rounded-md bg-secondary">
                  {option.slice(0, 200)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div>
        <div className="text-lg flex justify-center mt-2">
          <Link to="/Issues" className="w-64">
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

export default EthicalIssue;
