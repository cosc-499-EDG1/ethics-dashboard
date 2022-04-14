import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import StakeholderPleasureInput from "./stakeholder-pleasure-input";
import OptionsPleasureOutput from "./options-pleasure-output";
import { useStoreState } from "../../stores/index.store";
import DashboardService from "../../services/dashboard.service";
import { useQuery } from "react-query";
import Dashboard from "../../../../node-src/build/models/dashboard.model";
import UtilitarianismPleasureBlock from "./utilitarianism-pleasure-block";

interface UtilitarianismPleasureProps {}
const numStakeholder = 3;
var stakeholderValues = new Array(numStakeholder);
for (let value = 0; value < stakeholderValues.length; value++) {
    stakeholderValues[value] = 50;
}

const UtilitarianismPleasure: FunctionComponent<UtilitarianismPleasureProps> = () => {
    const [valueChanged, setValue] = useState(50);

    //get details from the db
    const [stakeholderTitles, setStakeholderTitles] = useState(["", ""]);
    const [shortAmount, setShortAmount] = useState([[0],[0]]);
    const [longAmount, setLongAmount] = useState([[0],[0]]);
    const [shortTF, setShortTF] = useState([[false],[false]]);
    const [longTF, setLongTF] = useState(false);
    const [shortExp, setShortExp] = useState([[""],[""]]);
    const [longExp, setLongExp] = useState(["", ""]);
    const [options, setOptions] = useState(["",""]);
    const [redirect, setRedirect] = useState("");
    
    const currentDashboard = useStoreState((state) => state.dashboard.dashboard_id) ?? 0;
    
    const { isLoading, isError } = useQuery("dashboard", async () => {
            return await DashboardService.getDashboard({ id: currentDashboard });
        },
        {
            onSuccess: (data) => {
                const dashboard = data.data as Dashboard;
                setOptions(dashboard.options.map((o) => o.option_desc));
                setStakeholderTitles(dashboard.stakeholders.map((o) => o.title));
                
            },
        }
        );

    const numberOfOptions = options.length ?? 0;
        

    const setShortAmountValue = (optindex: number, stkindex:number, value: string) => {
        const newSAV = [...shortAmount];
        newSAV[optindex][stkindex] = +value;
        setShortAmount(newSAV);
    };

    const setShortPleasure = (optindex: number, stkindex: number, value: string) => {
        const newSP = [...shortTF];
        newSP[optindex][stkindex] = (value === "true");
    };

    const setShortExplanation = (optindex: number, stkindex: number, value: string) => {
        const newSE = [...shortExp];
        newSE[optindex][stkindex] = value;
        setShortExp(newSE);
    };

    const setLongAmountValue = (optindex: number, stkindex:number, value: string) => {
        const newLAV = [...shortAmount];
        newLAV[optindex][stkindex] = +value;
        setLongAmount(newLAV);
    };

    const setLongPleasure = (optindex: number, stkindex: number, value: string) => {

    };

    const setLongExplanation = (optindex: number, stkindex: number, value: string) => {

    };

    const changedValue = async (value: string, id: string) => {
        const cValue = parseInt(value) * 10;
        const cID = parseInt(id);
        var average = 0;
        for (let i = 0; i < stakeholderValues.length; i++) {
            if (i === (cID-1)) {
                stakeholderValues[i] = cValue;
            }
            average = average + stakeholderValues[i];
        }
        average = average / numStakeholder;
        setValue(average);
    };
    
    console.log(stakeholderTitles);
if(stakeholderTitles !== undefined || options !== undefined){
    return(
        <div className="site-dashboard">
            <div className="dashboard-title">
                <div className="dashboard-title-text">
                    <h1>Utilitarianism</h1>
                </div>
                <div className="dashboard-title-description">
                    <p>
                    The Greatest Happiness Principle, actions are right if they promote happiness (pleasure) and wrong if they promote 
                    unhappiness (pain). Consider the relative stakeholder pleasures or pains for the options you identified. Identify 
                    the pleasures as higher or lower by ticking the box.
                    </p>
                </div>
            </div>
            <div className="dashboard-page md:flex">
                <div className="dashboard-block-1 w-2/3">
                     {options.map((text: string, idx: number) =>(
                   <UtilitarianismPleasureBlock
                   data={{optionId: idx, optionTitle: text, short: true, stakeholders: stakeholderTitles, values: shortAmount[idx] , explanations: shortExp[idx], pleasure: shortTF[idx] }}
                   changeValue={setShortAmountValue}
                    changeExplanation={setShortExplanation}
                    changePleasure={setShortPleasure}
                   />
               ))}
                </div>
              
                <div className="dashboard-block-1 w-1/3 ml-2">
                    <OptionsPleasureOutput option={{id: 1, valueST: valueChanged, valueLT: 50}} />
                    <OptionsPleasureOutput option={{id: 2, valueST: 50, valueLT: 50}} />
                </div>
            </div>
            <div className="flex justify-center items-center m-6">
                <div className="grid grid-cols-2 gap-4">
                    <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <Link to="/utilitarianism-stakeholders">Go Back</Link>
                    </button>
                    <button className="bg-primary hover:brightness-125 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <Link to="/utilitarianism-summary">Next</Link>
                    </button>
                </div>
            </div>
        </div>
    );}
    else{
        return (<div>
            <p className="dashboard-title">
                There was an issue with the API please go back and try again.
            </p>
        </div>
        )
    }

};

export default UtilitarianismPleasure;