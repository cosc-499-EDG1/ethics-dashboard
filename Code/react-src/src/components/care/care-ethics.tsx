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
import Stakeholder from "../../../../node-src/build/models/stakeholder.model";
import CaseOption from "../../../../node-src/build/models/option.model";

interface CareEthicsProps {}

const CareEthics: FunctionComponent<CareEthicsProps> = () => {
  const [redirect, setRedirect] = useState("");

  const [valueChanged, setValue] = useState(50);

  const [currentOption, setCurrentOption] = useState(1);

  const [options, setOptions] = useState<CaseOption[]>([]);
  const [stakeholders, setStakeholders] = useState<Stakeholder[]>([]);
  const [attentiveness, setAttentiveness] = useState<number[]>([]);
  const [competence, setCompetence] = useState<number[]>([]);
  const [responsiveness, setResponsiveness] = useState<number[]>([]);

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
        const ethics = dashboard.options.find(
          (o: CaseOption) => o.option_num === currentOption
        )?.care_ethics_options;
        setAttentiveness(ethics?.map((e) => e.attentiveness ?? 5) ?? []);
        setCompetence(ethics?.map((e) => e.competence ?? 5) ?? []);
        setResponsiveness(ethics?.map((e) => e.responsiveness ?? 5) ?? []);
        if (attentiveness.length === 0 || competence.length === 0 || responsiveness.length === 0) {
          var defaultValues = new Array(dashboard.stakeholders.length);
          for (let i = 0; i < dashboard.stakeholders.length; i++) {
              defaultValues[i] = 5;
          }
          setAttentiveness(defaultValues);
          setCompetence(defaultValues);
          setResponsiveness(defaultValues);
        }
      },
    }
  );

  const changedValue = async () => {
    var average = 0;
    for (let i = 0; i < attentiveness.length; i++) {
      average = average + attentiveness[i]*10;
      average = average + competence[i]*10;
      average = average + responsiveness[i]*10;
    }
    average = average / (stakeholders.length * 3);
    setValue(average);
  };

  const queryClient = useQueryClient();
  const updateCareEthics = useMutation(CareEthicsService.updateCareEthics, {
    onSuccess: () => {
      queryClient.invalidateQueries("dashboard");
    },
  });

  const updateForm = async () => {
    setCurrentOption(currentOption+1);
    const data = {
      attentiveness: attentiveness,
      competence: competence,
      responsiveness: responsiveness,
    };

    await updateCareEthics.mutateAsync({
      id: currentDashboard,
      updateType: "data",
      option_num: currentOption,
      ...data,
    });

    if (currentOption >= options.length) {
      setRedirect("/dashboard");
    }
  };

  const setAttentivenessValue = (index: number, value: string) => {
    const newAttentiveness = [...attentiveness];
    newAttentiveness[index] = +value;
    setAttentiveness(newAttentiveness);
  };

  const setResponsivenessValue = (index: number, value: string) => {
    const newResponsiveness = [...responsiveness];
    newResponsiveness[index] = +value;
    setResponsiveness(newResponsiveness);
  };

  const setCompetenceValue = (index: number, value: string) => {
    const newCompetence = [...competence];
    newCompetence[index] = +value;
    setCompetence(newCompetence);
  };

  if (redirect) {
    return (
      <Redirect to={{ pathname: redirect, state: { from: "/care-ethics" } }} />
    );
  }

  const option = options[currentOption - 1] ?? {};

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
          <p className="dashboard-block-title">{option.option_title}</p>
          <p className="dashboard-block-description">{option.option_desc}</p>
          <div className="max-h-120 overflow-y-auto">
            {stakeholders.map((stakeholder: Stakeholder, idx: number) => (
              <StakeholderCareEthicsInput
                key={idx}
                stakeholder={{
                  id: stakeholder.num,
                  data: `Stakeholder ${stakeholder.num + 1}`,
                  desc: stakeholder.title,
                  attentivenessValue: attentiveness[stakeholder.num]?.toString(),
                  competenceValue: competence[stakeholder.num]?.toString(),
                  responsivenessValue: responsiveness[stakeholder.num]?.toString(),
                  onChange: changedValue,
                  onAttentivenessChange: setAttentivenessValue,
                  onResponsivenessChange: setResponsivenessValue,
                  onCompetenceChange: setCompetenceValue,
                }}
              />
            ))}
          </div>
        </div>
        <div className="dashboard-block-1 w-1/2 ml-2">
          <div className="max-h-144 overflow-y-auto">
          {options.map((option: CaseOption, idx: number) => (
            <OptionCareEthicsInput
              option={{
                id: idx+1,
                data: `Option ${idx+1}`,
                color: idx+1 === currentOption ? "text-black":"text-gray-200",
                value: idx+1 === currentOption ? valueChanged:50,
              }}
            />
          ))}
          </div>
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
