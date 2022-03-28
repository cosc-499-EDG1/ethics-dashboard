import { FunctionComponent, useEffect, useRef, useState } from "react";
import IssuesOption from "./issues-option";
import { useMutation, useQuery, useQueryClient } from "react-query";
import DashboardService from "../../services/dashboard.service";
import { useStoreState } from "../../stores/index.store";
import Dashboard from "../../../../node-src/build/models/dashboard.model";
import { Button } from "../global/button";
import CaseOption from "../../../../node-src/build/models/option.model";
import { Redirect } from "react-router";

interface Issues {}

const Issue: FunctionComponent<Issues> = () => {
  const [redirect, setRedirect] = useState("");

  const [summary, setSummary] = useState("");
  const [dilemmas, setDilemmas] = useState("");
  const [role, setRole] = useState("");
  const [options, setOptions] = useState(["", ""]);

  const currentDashboard =
    useStoreState((state) => state.dashboard.dashboard_id) ?? 0;
  const {isLoading, isError} = useQuery("dashboard", async () => {
    return await DashboardService.getDashboard({ id: currentDashboard });
  }, { onSuccess: (data) => {
    const dashboard = data.data.dashboard as Dashboard;
    setSummary(dashboard.summary ?? "");
    setDilemmas(dashboard.dilemmas ?? "");
    setRole(dashboard.role ?? "");
    setOptions(data.data.options.map((o: CaseOption) => o.option_desc));
  }});

  const changeNumOptions = async (increase: boolean) => {
    if (increase === true) {
      if (options.length < 3) {
        setOptions([...options, ""]);
      }
    } else {
      if (options.length > 2) {
        setOptions([...options.slice(0, options.length - 1)]);
      }
    }
  };

  const queryClient = useQueryClient();
  const updateDashboard = useMutation(DashboardService.updateDashboard, {
    onSuccess: () => {
      queryClient.invalidateQueries("dashboard");
    },
  });

  const updateForm = async () => {
    const data = {
      summary: summary,
      dilemmas: dilemmas,
      role: role,
      options: options,
    };

    await updateDashboard.mutateAsync({
      id: currentDashboard,
      updateType: "data",
      ...data,
    });

    setRedirect('/dashboard');
  };

  const setOptionValue = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  if (redirect) {
    return <Redirect to={{ pathname: redirect, state: { from: "/issues" } }} />;
  }

  return (
    <div className="site-dashboard">
      <div className="dashboard-title">
        <div className="dashboard-title-text">
          <h1>Ethical Issue</h1>
        </div>
        <div className="dashboard-title-description">
          <p>
            Describe the dilemma you would like to analyze. Remember, ethical
            values are things that are important because they are right or wrong
            - lying, courage, loyalty, theft, etc.
          </p>
        </div>
      </div>

      <div className="dashboard-page">
        <div className="dashboard-block">
          <label className="dashboard-block-title">
            Case Summary
            <p className="dashboard-block-description">
              Briefly describe the key features of the case — the who, what,
              where, when and why.
            </p>
            <textarea
              className="dashboard-block-text-input"
              placeholder="Describe the case summary..."
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            ></textarea>
          </label>
        </div>
        <div className="dashboard-block">
          <label className="dashboard-block-title">
            Identify The Dilemmas
            <p className="dashboard-block-description">
              What are the ethical dilemmas you are facing? Describe the
              dilemmas in ethical terms, eg. honesty, deception, loyalty,
              betrayal, beneficence, malfeasance, autonomy, paternalism,
              confidentiality, transparency, integrity, etc.
            </p>
            <textarea
              className="dashboard-block-text-input"
              placeholder="Describe the dilemmas..."
              value={dilemmas}
              onChange={(e) => setDilemmas(e.target.value)}
            ></textarea>
          </label>
        </div>
        <div className="dashboard-block">
          <label className="dashboard-block-title">
            Choose Your Role
            <p className="dashboard-block-description">
              Put yourself in the position of a key decision maker in the case.
            </p>
            <textarea
              className="dashboard-block-text-input"
              placeholder="Your role..."
              value={role}
              onChange={(e) => setRole(e.target.value)}
            ></textarea>
          </label>
        </div>
        <div className="dashboard-block">
          <label className="dashboard-block-title">
            Identify Your Options
            <p className="dashboard-block-description">
              Consider 2 or 3 options you will analyze.
            </p>
            {options.map((text: string, idx: number) => (
              <IssuesOption
                key={idx}
                option={{ id: idx, data: text }}
                onChange={setOptionValue}
              />
            ))}
            <div className="text-center justify-center">
              <button
                className={`${
                  options.length < 3 ? "bg-primary" : "bg-main"
                } hover:brightness-110 text-white text-lg font-bold py-2 mx-2 w-40 rounded-md focus:outline-none focus:shadow-outline`}
                onClick={(e) => changeNumOptions(true)}
              >
                Add Option
              </button>
              <button
                className={`${
                  options.length > 2 ? "bg-primary" : "bg-main"
                } hover:brightness-110 text-white text-lg font-bold py-2 mx-2 w-40 rounded-md focus:outline-none focus:shadow-outline`}
                onClick={(e) => changeNumOptions(false)}
              >
                Remove Option
              </button>
            </div>
          </label>
        </div>
      </div>
      <div className="flex justify-center items-center m-6">
        <Button
          text={"Submit"}
          formSubmit={false}
          onClick={() => updateForm()}
        ></Button>
      </div>
    </div>
  );
};

export default Issue;
