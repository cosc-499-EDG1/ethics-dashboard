import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import StakeholderPleasureInput from "./stakeholder-pleasure-input";
import OptionsPleasureOutput from "./options-pleasure-output";

interface UtilitarianismPleasureProps {}
const numStakeholder = 3;
var stakeholderValues = new Array(numStakeholder);
for (let value = 0; value < stakeholderValues.length; value++) {
    stakeholderValues[value] = 50;
}

const UtilitarianismPleasure: FunctionComponent<UtilitarianismPleasureProps> = () => {
    const [valueChanged, setValue] = useState(50);

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
            <div className="pt-30">
                <p>
                    
                </p>
            </div>
            <div className="md:flex">
                <div className="dashboard-consequences">
                    <label className="text-3xl font-bold">
                        Option 1
                        <p className="text-4xl font-bold text-blue-500">
                            Short-term Consequences
                        </p>
                        <StakeholderPleasureInput stakeholder={{id: 1, data: "Stakeholder 1 (Inputed from Stakeholders page)", value: 5, onChange: (e) => changedValue(e.target.value, e.target.id)}} />
                        <StakeholderPleasureInput stakeholder={{id: 2, data: "Stakeholder 2 (Inputed from Stakeholders page)", value: 5, onChange: (e) => changedValue(e.target.value, e.target.id)}} />
                        <StakeholderPleasureInput stakeholder={{id: 3, data: "Stakeholder 3 (Inputed from Stakeholders page)", value: 5, onChange: (e) => changedValue(e.target.value, e.target.id)}} />
                    </label>
                </div>
                <div className="dashboard-aggregate">
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
                    <Link to="/">Submit</Link>
                    </button>
                </div>
            </div>
        </div>
    );

};

export default UtilitarianismPleasure;