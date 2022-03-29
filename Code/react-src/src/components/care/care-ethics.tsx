import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import StakeholderCareEthicsInput from "./stakeholder-care-ethics-input";
import OptionCareEthicsInput from "./option-care-ethics-input";
import { useMutation, useQuery, useQueryClient } from "react-query";
import DashboardService from "../../services/dashboard.service";
import { useStoreState } from "../../stores/index.store";
import Dashboard from "../../../../node-src/build/models/dashboard.model";
import CareEthicsService from "../../services/care-ethics.service";
import { Button } from "../global/button";
import { Redirect } from "react-router";
import CaseCareEthics from "../../../../node-src/build/models/care_ethics_options.model";
import CaseOptions from "../../../../node-src/build/models/option.model";
import Stakeholder from "../../../../node-src/build/models/stakeholder.model";

interface CareEthicsProps {}

const numStakeholder = 5;
var stakeholderValues = new Array(numStakeholder);
for (let value = 0; value < stakeholderValues.length; value++) {
  stakeholderValues[value] = new Array(3);
  for (let value1 = 0; value1 < stakeholderValues[value].length; value1++) {
    stakeholderValues[value][value1] = 50;
  }
}

const CareEthics: FunctionComponent<CareEthicsProps> = () => {
  const [redirect, setRedirect] = useState("");

  const [valueChanged, setValue] = useState(50);

  const [options, setOptions] = useState(["", ""]);
  const [stakeholders, setStakeholders] = useState(["", ""]);
  const [optionsDesc, setOptionsDesc] = useState(["", ""]);
  const [stakeholdersTitle, setStakeholdersTitle] = useState(["", ""]);
  const [attentiveness, setAttentiveness] = useState(["", ""]);
  const [competence, setCompetence] = useState(["", ""]);
  const [responsiveness, setResponsiveness] = useState(["", ""]);

  const currentDashboard =
    useStoreState((state) => state.dashboard.dashboard_id) ?? 0;
  const {isLoading, isError} = useQuery("dashboard", async () => {
    return await DashboardService.getDashboard({ id: currentDashboard });
  }, { onSuccess: (data) => {
    const dashboard = data.data.dashboard as Dashboard;
    setOptions(data.data.options.map((o: CaseCareEthics) => o.option_id));
    setOptionsDesc(data.data.options.map((o: CaseOptions) => o.option_desc));
    setStakeholders(data.data.stakeholders.map((s: CaseCareEthics) => s.stakeholder_id));
    setStakeholdersTitle(data.data.stakeholders.map((s: Stakeholder) => s.title));
    setAttentiveness(data.data.stakeholders.map((a: CaseCareEthics) => a.stakeholder_attentiveness));
    setCompetence(data.data.stakeholders.map((c: CaseCareEthics) => c.stakeholder_competence));
    setResponsiveness(data.data.stakeholders.map((r: CaseCareEthics) => r.stakeholder_responsiveness));
  }});

  const changedValue = async (change: number, id: number, value: string) => {
    const cValue = parseInt(value) * 10;
    const cID = id;
    const docID = change;
    var average = 0;
    for (let i = 0; i < stakeholderValues.length; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === cID) {
          if (j === docID - 1) {
            stakeholderValues[i][j] = cValue;
          }
        }
        average = average + stakeholderValues[i][j];
      }
    }
    average = average / (numStakeholder * 3);
    setValue(average);
  };

  const queryClient = useQueryClient();
  const updateCareEthics = useMutation(CareEthicsService.updateCareEthics, {
    onSuccess: () => {
      queryClient.invalidateQueries("dashboard");
    },
  });

  const updateForm = async () => {
    const data = {
      attentiveness: attentiveness,
      competence: competence,
      responsiveness: responsiveness,
    };

    await updateCareEthics.mutateAsync({
      id: currentDashboard,
      updateType: "data",
      ...data,
    });

    setRedirect('/dashboard');
  };

  const setAttentivenessValue = (index: number, value: string) => {
    const newAttentiveness = [...attentiveness];
    newAttentiveness[index] = value;
    setAttentiveness(newAttentiveness);
  };

  const setResponsivenessValue = (index: number, value: string) => {
    const newResponsiveness = [...responsiveness];
    newResponsiveness[index] = value;
    setResponsiveness(newResponsiveness);
  };

  const setCompetenceValue = (index: number, value: string) => {
    const newCompetence = [...competence];
    newCompetence[index] = value;
    setCompetence(newCompetence);
  };

  if (redirect) {
    return <Redirect to={{ pathname: redirect, state: { from: "/care-ethics" } }} />;
  }

  return (
    <div className="site-dashboard">
      <div className="dashboard-title">
        <div className="dashboard-title-text">
          <h1>Care Ethics</h1>
        </div>
        <div className="dashboard-title-description">
          <p>
            Care ethics we come to understand the right thing to do by
            considering how we can care for others. There are three main
            features of care. Attentiveness: Being aware of needs in others.
            Competence: The ability to deliver what is needed Responsiveness:
            Empathy for the position of others in need of care.
          </p>
        </div>
      </div>
      <div className="dashboard-page md:flex">
        <div className="dashboard-block w-1/2 mr-2">
          <p className="dashboard-block-title">
            Option {options[0]}
          </p>
          <p className="dashboard-block-description">
            {optionsDesc[0]}
          </p>
          <div className="max-h-128 overflow-y-auto">
          {stakeholdersTitle.map((text: string, idx: number) => (
            <StakeholderCareEthicsInput
              key={idx}
              stakeholder={{
                id: idx,
                data: `Stakeholder ${idx+1}`,
                desc: text,
                attentivenessValue: attentiveness[idx],
                competenceValue: competence[idx],
                responsivenessValue: responsiveness[idx],
                onChange: changedValue,
                onAttentivenessChange: setAttentivenessValue,
                onResponsivenessChange: setResponsivenessValue,
                onCompetenceChange: setCompetenceValue,
              }}
            />
          ))}
          </div>
          {/* <StakeholderCareEthicsInput
            stakeholder={{
              id: 1,
              data: "Stakeholder 1",
              desc: "The engineer asked to design the VW defeat...",
              attentivenessValue: number,
              competenceValue: number,
              responsivenessValue: number,
              onChange: (e) => changedValue(e.target.value, e.target.id),
            }}
          />
          <StakeholderCareEthicsInput
            stakeholder={{
              id: 2,
              data: "Stakeholder 2",
              desc: "The decision makers at VW who asked...",
              onChange: (e) => changedValue(e.target.value, e.target.id),
            }}
          />
          <StakeholderCareEthicsInput
            stakeholder={{
              id: 3,
              data: "Stakeholder 3",
              desc: "Blah, blah, blah...",
              onChange: (e) => changedValue(e.target.value, e.target.id),
            }}
          /> */}
        </div>
        <div className="dashboard-block-1 w-1/2 ml-2">
          <OptionCareEthicsInput
            option={{
              id: 1,
              data: "Option 1",
              color: "text-black",
              value: valueChanged,
            }}
          />
          <OptionCareEthicsInput
            option={{
              id: 2,
              data: "Option 2",
              color: "text-gray-400",
              value: 50,
            }}
          />
        </div>
      </div>
      <div className="flex justify-center items-center m-6">
        <Button
          text={"Next"}
          formSubmit={false}
          onClick={() => updateForm()}
        ></Button>
      </div>
    </div>
  );
};

export default CareEthics;
