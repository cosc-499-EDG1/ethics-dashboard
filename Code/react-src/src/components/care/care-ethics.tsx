import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import StakeholderCareEthicsInput from "./stakeholder-care-ethics-input";
import OptionCareEthicsInput from "./option-care-ethics-input";
import { useMutation, useQuery, useQueryClient } from "react-query";
import DashboardService from "../../services/dashboard.service";
import { useStoreState } from "../../stores/index.store";
import Dashboard from "../../../../node-src/build/models/dashboard.model";
import { Button } from "../global/button";
import { Redirect } from "react-router";
import CaseCareEthics from "../../../../node-src/build/models/care_ethics_options.model";

interface CareEthicsProps {}

const CareEthics: FunctionComponent<CareEthicsProps> = () => {
  const [redirect, setRedirect] = useState("");

  const [valueChanged, setValue] = useState(50);

  const testAttentiveness = [5, 5, 5, 5, 5];
  const [options, setOptions] = useState(["", ""]);
  const [stakeholders, setStakeholders] = useState(["", ""]);
  const [attentiveness, setAttentiveness] = useState(testAttentiveness);
  const [competence, setCompetence] = useState(testAttentiveness);
  const [responsiveness, setResponsiveness] = useState(testAttentiveness);

  const currentDashboard =
    useStoreState((state) => state.dashboard.dashboard_id) ?? 0;
  const {isLoading, isError} = useQuery("dashboard", async () => {
    return await DashboardService.getDashboard({ id: currentDashboard });
  }, { onSuccess: (data) => {
    const dashboard = data.data.dashboard as Dashboard;
    setOptions(data.data.options.map((o: CaseCareEthics) => o.option_id));
    setStakeholders(data.data.stakeholders.map((s: CaseCareEthics) => s.stakeholder_id));
    setAttentiveness(data.data.stakeholders.map((a: CaseCareEthics) => a.stakeholder_attentiveness));
    setCompetence(data.data.stakeholders.map((c: CaseCareEthics) => c.stakeholder_competence));
    setResponsiveness(data.data.stakeholders.map((r: CaseCareEthics) => r.stakeholder_responsiveness));
  }});

  const changedValue = async (value: string, id: string) => {
    const cValue = parseInt(value) * 10;
    var idString = id.split("-");
    const cID = parseInt(idString[0]);
    const docID = parseInt(idString[1]);
    var average = 0;
    for (let i = 0; i < stakeholderValues.length; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === cID - 1) {
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
  const updateDashboard = useMutation(DashboardService.updateDashboard, {
    onSuccess: () => {
      queryClient.invalidateQueries("dashboard");
    },
  });

  const updateForm = async () => {
    const data = {
      options: options,
    };

    await updateDashboard.mutateAsync({
      id: currentDashboard,
      updateType: "data",
      ...data,
    });

    setRedirect('/care-ethics');
  };

  const setOptionValue = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const numStakeholder = 2;
  var stakeholderValues = new Array(numStakeholder);
  for (let value = 0; value < stakeholderValues.length; value++) {
    stakeholderValues[value] = new Array(3);
    for (let value1 = 0; value1 < stakeholderValues[value].length; value1++) {
      stakeholderValues[value][value1] = 50;
    }
  }

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
            Option 1
          </p>
          <p className="dashboard-block-description">
            I can put loyalty to the company...
          </p>
          {stakeholders.map((text: string, idx: number) => (
            <StakeholderCareEthicsInput
              stakeholder={{
                id: 1,
                data: `Stakeholder ${idx}`,
                desc: text.slice(0, 20),
                attentivenessValue: attentiveness[idx],
                competenceValue: competence[idx],
                responsivenessValue: responsiveness[idx],
                onChange: (e) => changedValue(e.target.value, e.target.id),
              }}
            />
          ))}
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
