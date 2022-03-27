import { useStoreState } from "../../stores/index.store";
import { FunctionComponent, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import DashboardService from "../../services/dashboard.service";
import Util_Opt_Analysis from "../../../../node-src/build/models/util_opt_analysis.model"
import CaseOption from "../../../../node-src/build/models/option.model";
import Dashboard from "../../../../node-src/build/models/dashboard.model";
import UtilitarianismOptionBlock from "./utilitarianism-options-block";


interface UtilitarianismOptionsProps {}

const UtilitarianismOptions: FunctionComponent<UtilitarianismOptionsProps> = () => {
    const [option1_short, setOption1_short] = useState("");
    const [option2_short, setOption2_short] = useState("");
    const [option3_short, setOption3_short] = useState("");

    const [option1_long, setOption1_long] = useState("");
    const [option2_long, setOption2_long] = useState("");
    const [option3_long, setOption3_long] = useState("");

    const [optionConsequences, setOptionConsequences] = useState(["", ""]);

    const [options, setOptions] = useState(["","", "", ""]);

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
      }}); 

     const setOptionValue = (index: number, value: string) => {
       const newOptions = [...optionConsequences];
       newOptions[index] = value;
       setOptionConsequences(newOptions);
    };

    const attemptUpload = async () => {


        return;
    };
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
                option={{ id: idx, data: text }}
                onChange={setOptionValue}
              />
            ))}
            </div>
            <div className="flex justify-center items-center m-6">
                <button className="bg-primary hover:brightness-125 text-white font-bold w-1/12 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <Link to="/utilitarianism-stakeholders">Submit</Link>
                </button>
            </div>
        </div>
    );

};

export default UtilitarianismOptions;