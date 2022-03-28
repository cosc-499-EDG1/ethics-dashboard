import { useStoreState } from "../../stores/index.store";
import { FunctionComponent, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link, Redirect } from "react-router-dom";
import DashboardService from "../../services/dashboard.service";
import Util_Opt_Analysis from "../../../../node-src/build/models/util_opt_analysis.model"
import CaseOption from "../../../../node-src/build/models/option.model";
import Dashboard from "../../../../node-src/build/models/dashboard.model";
import UtilitarianismOptionBlock from "./utilitarianism-options-block";
import { Button } from "../global/button";


interface UtilitarianismOptionsProps {}

const UtilitarianismOptions: FunctionComponent<UtilitarianismOptionsProps> = () => {
    
    const [optionShortConsequences, setOptionShortConsequences] = useState(["", ""]);
    const [optionLongConsequences, setOptionLongConsequences] = useState(["", ""]);
    const [options, setOptions] = useState(["",""]);

    const [errorMessage, setErrorMessage] = useState("");
    const [redirect, setRedirect] = useState("");
    const currentDashboard = useStoreState((state) => state.dashboard.dashboard_id) ?? 0;

    const numOptions = useStoreState(((state) => state.options.num_options) ?? 0);
   
    const queryClient = useQueryClient();

    const {isLoading, isError} = useQuery("dashboard", async () => {
        return await DashboardService.getDashboard({ id: currentDashboard });
      }, { onSuccess: (data) => {
        const dashboard = data.data.dashboard as Dashboard;
        setOptions(data.data.options.map((o: CaseOption) => o.option_desc) );
        setOptionShortConsequences(data.data.options.map((o: CaseOption) => o.short_consequences))
        setOptionLongConsequences(data.data.options.map((o: CaseOption) => o.long_consequences))
      }}); 

     const setOptionValue = (index: number, value: string) => {
       const newOptions = [...options];
       newOptions[index] = value;
       setOptions(newOptions);
    };

    const setShortValue = (index: number, value: string) => {
        const newShortConsequences = [...optionShortConsequences];
        newShortConsequences[index] = value;
        setOptionShortConsequences(newShortConsequences);
    };

    const setLongValue = (index: number, value: string) => {
        const newLongConsequence = [...optionLongConsequences];
        newLongConsequence[index] = value;
        setOptionLongConsequences(newLongConsequence);
    };

    const updateDashboard = useMutation(DashboardService.updateDashboard, {
        onSuccess: () => {
          queryClient.invalidateQueries("dashboard");
        },
      });

    const attemptUpload = async () => {
        const consequences = {
            optionShortConsequences: optionShortConsequences,
            optionLongConsequences: optionLongConsequences,
        };

         await updateDashboard.mutateAsync({
            id: currentDashboard,
            updateType: "consequences",
            ...consequences,
            });

        setRedirect('/utilitarianism-stakeholders');
    };

    if (redirect) {
        return <Redirect to={{ pathname: redirect, state: { from: "/issues" } }} />;
      }
    return(
        <div className="site-dashboard">
            <div className="dashboard-title">
                <div className="dashboard-title-text">
                    <h1>Utilitarianism</h1>
                </div>
                <div className="dashboard-title-description">
                    <p>
                    Utilitarianism is a consequentialist theory – meaning that the moral worth of an action is determined by the consequences 
                    of the action. The first step is to consider the consequences, both short-term and long-term, for the options you’ve identified. 
                    </p>
                </div>
            </div>
            <div className="dashboard-page">
                
                {options.map((text: string, idx: number) => (
              <UtilitarianismOptionBlock
                key={idx}
                option={{ id: idx, data: text, short: optionShortConsequences[idx], long: optionLongConsequences[idx] }}
                onChange={setOptionValue}
                shortChange={setShortValue}
                longChange={setLongValue}
              />
            ))}
            </div>
            <div className="flex justify-center items-center m-6 bg-primary hover:brightness-125 text-white font-bold w-1/12 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <Button
                text={"Submit"}
                formSubmit={false}
                onClick={() => attemptUpload()}
                ></Button>
            </div>
        </div>
    );

};

export default UtilitarianismOptions;