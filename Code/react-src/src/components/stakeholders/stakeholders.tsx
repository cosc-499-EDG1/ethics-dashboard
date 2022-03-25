import { useStoreActions, useStoreState } from "../../stores/index.store";
import { FunctionComponent, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { StakeholderForm } from "../global/stakeholderform";
import StakeholderInput from "../global/stakeholderinput";
import { Button } from "../global/button";

interface StakeholderProps {}

const Stakeholders: FunctionComponent<StakeholderProps> = () => {
  const stakeholder = useStoreActions(
    (actions) => actions.stakeholder.addStakeholder
  );
  const currentDashboard =
    useStoreState((state) => state.dashboard.dashboard_id) ?? 0;

  const [numStakeholders, setNumStakeholders] = useState(3);
  var stakeholderTitle = new Array(numStakeholders).fill("");
  var setStakeholderTitle = new Array(numStakeholders).fill("");
  
  const [stakeholder1_title, setStakeholder1_title] = useState("");
  const [stakeholder2_title, setStakeholder2_title] = useState("");
  const [stakeholder3_title, setStakeholder3_title] = useState("");
  const [stakeholder4_title, setStakeholder4_title] = useState("");
  const [stakeholder5_title, setStakeholder5_title] = useState("");
  const [stakeholder6_title, setStakeholder6_title] = useState("");
  const [stakeholder7_title, setStakeholder7_title] = useState("");
  const [stakeholder8_title, setStakeholder8_title] = useState("");
  const [stakeholder9_title, setStakeholder9_title] = useState("");

  stakeholderTitle[0] = stakeholder1_title;
  stakeholderTitle[1] = stakeholder2_title;
  stakeholderTitle[2] = stakeholder3_title;
  stakeholderTitle[3] = stakeholder4_title;
  stakeholderTitle[4] = stakeholder5_title;
  stakeholderTitle[5] = stakeholder6_title;
  stakeholderTitle[6] = stakeholder7_title;
  stakeholderTitle[7] = stakeholder8_title;
  stakeholderTitle[8] = stakeholder9_title;
  setStakeholderTitle[0] = setStakeholder1_title;
  setStakeholderTitle[1] = setStakeholder2_title;
  setStakeholderTitle[2] = setStakeholder3_title;
  setStakeholderTitle[3] = setStakeholder4_title;
  setStakeholderTitle[4] = setStakeholder5_title;
  setStakeholderTitle[5] = setStakeholder6_title;
  setStakeholderTitle[6] = setStakeholder7_title;
  setStakeholderTitle[7] = setStakeholder8_title;
  setStakeholderTitle[8] = setStakeholder9_title;
  
  var stakeholderDesc = new Array(numStakeholders).fill("");
  var setStakeholderDesc = new Array(numStakeholders).fill("");

  const [stakeholder1_desc, setStakeholder1_desc] = useState("");
  const [stakeholder2_desc, setStakeholder2_desc] = useState("");
  const [stakeholder3_desc, setStakeholder3_desc] = useState("");
  const [stakeholder4_desc, setStakeholder4_desc] = useState("");
  const [stakeholder5_desc, setStakeholder5_desc] = useState("");
  const [stakeholder6_desc, setStakeholder6_desc] = useState("");
  const [stakeholder7_desc, setStakeholder7_desc] = useState("");
  const [stakeholder8_desc, setStakeholder8_desc] = useState("");
  const [stakeholder9_desc, setStakeholder9_desc] = useState("");


  stakeholderDesc[0] = stakeholder1_desc;
  stakeholderDesc[1] = stakeholder2_desc;
  stakeholderDesc[2] = stakeholder3_desc;
  stakeholderDesc[3] = stakeholder4_desc;
  stakeholderDesc[4] = stakeholder5_desc;
  stakeholderDesc[5] = stakeholder6_desc;
  stakeholderDesc[6] = stakeholder7_desc;
  stakeholderDesc[7] = stakeholder8_desc;
  stakeholderDesc[8] = stakeholder9_desc;
  setStakeholderDesc[0] = setStakeholder1_desc;
  setStakeholderDesc[1] = setStakeholder2_desc;
  setStakeholderDesc[2] = setStakeholder3_desc;
  setStakeholderDesc[3] = setStakeholder4_desc;
  setStakeholderDesc[4] = setStakeholder5_desc;
  setStakeholderDesc[5] = setStakeholder6_desc;
  setStakeholderDesc[6] = setStakeholder7_desc;
  setStakeholderDesc[7] = setStakeholder8_desc;
  setStakeholderDesc[8] = setStakeholder9_desc;

  const [errorMessage, setErrorMessage] = useState("");
  const [redirect, setRedirect] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (redirect) {
    return <Redirect to={{ pathname: redirect, state: { from: "/stakeholders" } }} />;
  }

  const attemptUpload = async () => {
    if (numStakeholders > 0 && (stakeholder1_title !== "" || stakeholder1_desc !== "")) {
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
    if (numStakeholders > 1 && (stakeholder2_title !== "" || stakeholder2_desc !== "")) {
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
    if (numStakeholders > 2 && (stakeholder3_title !== "" || stakeholder3_desc !== "")) {
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
    if (numStakeholders > 3 && (stakeholder4_title !== "" || stakeholder4_desc !== "")) {
      setIsLoading(true);
      const data = await stakeholder({
        title: stakeholder4_title,
        description: stakeholder4_desc,
        num: 4,
        dashboard_id: currentDashboard,
      });
      setIsLoading(false);
      setErrorMessage(data.message);
    }
    if (numStakeholders > 4 && (stakeholder5_title !== "" || stakeholder5_desc !== "")) {
      setIsLoading(true);
      const data = await stakeholder({
        title: stakeholder5_title,
        description: stakeholder5_desc,
        num: 5,
        dashboard_id: currentDashboard,
      });
      setIsLoading(false);
      setErrorMessage(data.message);
    }
    if (numStakeholders > 5 && (stakeholder6_title !== "" || stakeholder6_desc !== "")) {
      setIsLoading(true);
      const data = await stakeholder({
        title: stakeholder6_title,
        description: stakeholder6_desc,
        num: 6,
        dashboard_id: currentDashboard,
      });
      setIsLoading(false);
      setErrorMessage(data.message);
    }
    if (numStakeholders > 6 && (stakeholder7_title !== "" || stakeholder7_desc !== "")) {
      setIsLoading(true);
      const data = await stakeholder({
        title: stakeholder7_title,
        description: stakeholder7_desc,
        num: 7,
        dashboard_id: currentDashboard,
      });
      setIsLoading(false);
      setErrorMessage(data.message);
    }
    if (numStakeholders > 7 && (stakeholder8_title !== "" || stakeholder8_desc !== "")) {
      setIsLoading(true);
      const data = await stakeholder({
        title: stakeholder8_title,
        description: stakeholder8_desc,
        num: 8,
        dashboard_id: currentDashboard,
      });
      setIsLoading(false);
      setErrorMessage(data.message);
    }
    if (numStakeholders > 8 && (stakeholder9_title !== "" || stakeholder9_desc !== "")) {
      setIsLoading(true);
      const data = await stakeholder({
        title: stakeholder9_title,
        description: stakeholder9_desc,
        num: 9,
        dashboard_id: currentDashboard,
      });
      setIsLoading(false);
      setErrorMessage(data.message);
    }
    return;
  };

  var formInputs = new Array(numStakeholders*2).fill("");
  for (let j = 0, interval = 1; j < formInputs.length; j++, interval+=0.5) {
    if (j % 2 === 0) {
      formInputs[j] =
      <StakeholderInput stakeholder={{
      key: `stakeholder${interval}_title`,
      label: `Stakeholder ${interval} Title`,
      type: "text",
      placeholder: `Stakeholder ${interval} Title`,
      value: stakeholderTitle[interval-1],
      onChange: (e) => setStakeholderTitle[interval-1](e.target.value)}}/>;
    } else {
      formInputs[j] =
      <StakeholderInput stakeholder={{
        key: `stakeholder${interval-0.5}_desc`,
        label: `Stakeholder ${interval-0.5} Description`,
        type: "textarea",
        placeholder: `Stakeholder ${interval-0.5} Description`,
        value: stakeholderDesc[interval-1.5],
        onChange: (e) => setStakeholderDesc[interval-1.5](e.target.value)}}/>;
    }
  }
  // const formInputs = [
  //   <div className="dashboard-block">
  //   <StakeholderInput
  //     key="stakeholder1_title"
  //     label="Stakeholder 1 Title"
  //     type="text"
  //     placeholder="Stakeholder 1 Title"
  //     value={stakeholder1_title}
  //     onChange={(e) => setStakeholder1_title(e.target.value)}
  //   />,
  //   <StakeholderInput
  //     key="stakeholder1_desc"
  //     label="Stakeholder 1 Description"
  //     type="textarea"
  //     placeholder="Stakeholder 1 Description"
  //     value={stakeholder1_desc}
  //     onChange={(e) => setStakeholder1_desc(e.target.value)}
  //   />
  //   </div>,
  //   <div className="dashboard-block">
  //   <StakeholderInput
  //     key="stakeholder2_title"
  //     label="Stakeholder 2 Title"
  //     type="text"
  //     placeholder="Stakeholder 2 Title"
  //     value={stakeholder2_title}
  //     onChange={(e) => setStakeholder2_title(e.target.value)}
  //   />,
  //   <StakeholderInput
  //     key="stakeholder2_desc"
  //     label="Stakeholder 2 Description"
  //     type="textarea"
  //     placeholder="Stakeholder 2 Description"
  //     value={stakeholder2_desc}
  //     onChange={(e) => setStakeholder2_desc(e.target.value)}
  //   />
  //   </div>,
  //   <div className="dashboard-block">
  //   <StakeholderInput
  //     key="stakeholder3_title"
  //     label="Stakeholder 3 Title"
  //     type="text"
  //     placeholder="Stakeholder 3 Title"
  //     value={stakeholder3_title}
  //     onChange={(e) => setStakeholder3_title(e.target.value)}
  //   />,
  //   <StakeholderInput
  //     key="stakeholder3_desc"
  //     label="Stakeholder 3 Description"
  //     type="textarea"
  //     placeholder="Stakeholder 3 Description"
  //     value={stakeholder3_desc}
  //     onChange={(e) => setStakeholder3_desc(e.target.value)}
  //   />
  //   </div>,
  // ];

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
      <div className="dashboard-page">
        <StakeholderForm
          inputs={formInputs}
          actions={formActions}
          isLoading={isLoading}
          wasSuccess={true}
          numStakeholders={numStakeholders}
          onSubmit={attemptUpload}
          message={errorMessage}
          setNumStakeholders={setNumStakeholders}
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
