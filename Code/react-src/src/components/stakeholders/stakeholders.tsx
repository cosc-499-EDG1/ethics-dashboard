import { useStoreActions, useStoreState } from "../../stores/index.store";
import { FunctionComponent, useState } from "react";
import { Redirect } from "react-router";
import StakeholderInput from "./stakeholderinput";
import { Button } from "../global/button";
import { useMutation, useQuery, useQueryClient } from "react-query";
import StakeholderService from "../../services/stakeholder.service";
import DashboardService from "../../services/dashboard.service";
import Dashboard from "../../../../node-src/build/models/dashboard.model";
import Stakeholder from "../../../../node-src/build/models/stakeholder.model";

interface StakeholderProps {}

export type StakeholderInputData = {
  title: string;
  description: string;
};

const Stakeholders: FunctionComponent<StakeholderProps> = () => {
  const currentDashboard =
    useStoreState((state) => state.dashboard.dashboard_id) ?? 0;

  const [stakeholders, setStakeholders] = useState<StakeholderInputData[]>([
    { title: "", description: "" },
    { title: "", description: "" },
  ]);

  const {isLoading, isError} = useQuery("dashboard", async () => {
    return await DashboardService.getDashboard({ id: currentDashboard });
  }, { onSuccess: (data) => {
    setStakeholders(data.data.stakeholders.map((o: Stakeholder) => {
      return {
        title: o.title,
        description: o.description,
      }
    }));
  }});

  const changeNumStakeholders = async (increase: boolean) => {
    if (increase === true) {
      if (stakeholders.length < 10) {
        setStakeholders([...stakeholders, { title: "", description: "" }]);
      }
    } else {
      if (stakeholders.length > 5) {
        setStakeholders([...stakeholders.slice(0, stakeholders.length - 1)]);
      }
    }
  };

  const setStakeholderValue = (index: number, value: StakeholderInputData) => {
    const newStakeholders = [...stakeholders];
    newStakeholders[index] = value;
    setStakeholders(newStakeholders);
  };

  const queryClient = useQueryClient();
  const updateStakeholders = useMutation(StakeholderService.updateStakeholders, {
    onSuccess: () => {
      queryClient.invalidateQueries("dashboard");
    },
  });

  const [redirect, setRedirect] = useState("");

  const updateForm = async () => {
    await updateStakeholders.mutateAsync({
      id: currentDashboard,
      data: stakeholders,
    });

    setRedirect("/dashboard");
  };

  if (redirect) {
    return (
      <Redirect to={{ pathname: redirect, state: { from: "/stakeholders" } }} />
    );
  }

  return (
    <div className="site-dashboard">
      <div className="dashboard-title">
        <div className="dashboard-title-text">
          <h1>Stakeholder Analysis</h1>
        </div>
        <div className="dashboard-title-description">
          <p>
            Stakeholders are persons or groups that will be impacted by the
            decision/action taken. List the stakeholders and what they want in
            the simplest terms – wealth, social status, etc. Note: It’s good to
            start with the decision-maker as the first stakeholder and then work
            out from there.
          </p>
        </div>
      </div>
      <div className="dashboard-page">
        <div className="dashboard-block">
          {stakeholders.map((data: StakeholderInputData, idx: number) => (
            <StakeholderInput
              key={idx}
              stakeholder={{ id: idx, data: data }}
              onChange={setStakeholderValue}
            />
          ))}

          <div className="text-center justify-center">
            <button
              className={`${
                stakeholders.length < 10 ? "bg-primary" : "bg-main"
              } hover:brightness-110 text-white text-lg font-bold py-2 mx-2 w-64 rounded-md focus:outline-none focus:shadow-outline`}
              onClick={(e) => changeNumStakeholders(true)}
            >
              Add Stakeholder
            </button>
            <button
              className={`${
                stakeholders.length > 5 ? "bg-primary" : "bg-main"
              } hover:brightness-110 text-white text-lg font-bold py-2 mx-2 w-64 rounded-md focus:outline-none focus:shadow-outline`}
              onClick={(e) => changeNumStakeholders(false)}
            >
              Remove Stakeholder
            </button>
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
    </div>
  );
};

export default Stakeholders;
