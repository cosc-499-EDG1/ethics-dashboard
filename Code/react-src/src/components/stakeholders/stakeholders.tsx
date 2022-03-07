import { useStoreActions, useStoreState } from "../../stores/index.store";
import { FunctionComponent, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { StakeholderForm } from "../global/stakeholderform";
import { StakeholderInput } from "../global/stakeholderinput";
import { Button } from "../global/button";

interface StakeholderProps {}

const Stakeholders: FunctionComponent<StakeholderProps> = () => {
  const stakeholder = useStoreActions(
    (actions) => actions.stakeholder.addStakeholder
  );
  const currentDashboard =
    useStoreState((state) => state.dashboard.dashboard_id) ?? 0;

  const [stakeholder1_title, setStakeholder1_title] = useState("");
  const [stakeholder2_title, setStakeholder2_title] = useState("");
  const [stakeholder3_title, setStakeholder3_title] = useState("");

  const [stakeholder1_desc, setStakeholder1_desc] = useState("");
  const [stakeholder2_desc, setStakeholder2_desc] = useState("");
  const [stakeholder3_desc, setStakeholder3_desc] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [redirect, setRedirect] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (redirect) {
    return <Redirect to={{ pathname: redirect, state: { from: "/stakeholders" } }} />;
  }

  const attemptUpload = async () => {
    if (stakeholder1_title !== "" || stakeholder1_desc !== null) {
      setIsLoading(true);
      const data = await stakeholder({
        title: stakeholder1_title,
        description: stakeholder1_desc,
        num: 1,
        dashboard_id: currentDashboard,
      });
      setIsLoading(false);
      setErrorMessage(data.message);
    }

    if (stakeholder2_title !== "" || stakeholder2_desc !== null) {
      setIsLoading(true);
      const data = await stakeholder({
        title: stakeholder2_title,
        description: stakeholder2_desc,
        num: 2,
        dashboard_id: currentDashboard,
      });
      setIsLoading(false);
      setErrorMessage(data.message);
    }
    if (stakeholder3_title !== "" || stakeholder3_desc !== null) {
      setIsLoading(true);
      const data = await stakeholder({
        title: stakeholder3_title,
        description: stakeholder3_desc,
        num: 3,
        dashboard_id: currentDashboard,
      });
      setIsLoading(false);
      setErrorMessage(data.message);
    }
    return;
  };

  const formInputs = [
    <div className="ethical-issues-block">
    <StakeholderInput
      key="stakeholder1_title"
      label="Stakeholder 1 Title"
      type="text"
      placeholder="Stakeholder 1 Title"
      value={stakeholder1_title}
      onChange={(e) => setStakeholder1_title(e.target.value)}
    />,
    <StakeholderInput
      key="stakeholder1_desc"
      label="Stakeholder 1 Description"
      type="textarea"
      placeholder="Stakeholder 1 Description"
      value={stakeholder1_desc}
      onChange={(e) => setStakeholder1_desc(e.target.value)}
    />
    </div>,
    <div className="ethical-issues-block">
    <StakeholderInput
      key="stakeholder2_title"
      label="Stakeholder 2 Title"
      type="text"
      placeholder="Stakeholder 2 Title"
      value={stakeholder2_title}
      onChange={(e) => setStakeholder2_title(e.target.value)}
    />,
    <StakeholderInput
      key="stakeholder2_desc"
      label="Stakeholder 2 Description"
      type="textarea"
      placeholder="Stakeholder 2 Description"
      value={stakeholder2_desc}
      onChange={(e) => setStakeholder2_desc(e.target.value)}
    />
    </div>,
    <div className="ethical-issues-block">
    <StakeholderInput
      key="stakeholder3_title"
      label="Stakeholder 3 Title"
      type="text"
      placeholder="Stakeholder 3 Title"
      value={stakeholder3_title}
      onChange={(e) => setStakeholder3_title(e.target.value)}
    />,
    <StakeholderInput
      key="stakeholder3_desc"
      label="Stakeholder 3 Description"
      type="textarea"
      placeholder="Stakeholder 3 Description"
      value={stakeholder3_desc}
      onChange={(e) => setStakeholder3_desc(e.target.value)}
    />
    </div>,
  ];
  const formActions = [
      <Button text={"Submit"} formSubmit={true} />,
  ];

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
      <div className="px-4 pt-10 w-full justify-center border-none">
        <StakeholderForm
          inputs={formInputs}
          actions={formActions}
          isLoading={isLoading}
          wasSuccess={true}
          onSubmit={attemptUpload}
          message={errorMessage}
        />
      </div>

      {/* 
            <div className="dashboard-entry">
                <label className="text-3xl font-bold">
                    Stakeholder 1
                    <textarea className="w-full border-none" placeholder="Stakeholder Title">
                    </textarea>
                    <textarea rows={10} className="w-full border-none" placeholder="Description Here...">
                    </textarea>
                </label>
            </div>
            <div className="dashboard-entry">
                <label className="text-3xl font-bold">
                    Stakeholder 2
                    <textarea className="w-full border-none" placeholder="Stakeholder Title">
                    </textarea>
                    <textarea rows={10} className="w-full border-none" placeholder="Description Here...">
                    </textarea>
                </label>
            </div>
            <div className="dashboard-entry">
                <label className="text-3xl font-bold">
                    Stakeholder 3
                    <textarea className="w-full border-none" placeholder="Stakeholder Title">
                    </textarea>
                    <textarea rows={10} className="w-full border-none" placeholder="Description Here...">
                    </textarea>
                </label>
            </div>
            <div className="flex justify-center items-center m-6">
                <button className="bg-primary hover:brightness-125 text-white font-bold w-1/12 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <Link to="/dashboard">Submit</Link>
                </button>
            </div>
            */}
    </div>
  );
};

export default Stakeholders;
