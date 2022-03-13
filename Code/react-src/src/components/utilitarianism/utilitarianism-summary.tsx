import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import StakeholderPleasureInput from "./stakeholder-pleasure-input";
import OptionsSummaryOutput from "./options-summary-output";

interface UtilitarianismSummaryProps {}
const numStakeholder = 3;
var stakeholderValues = new Array(numStakeholder);
for (let value = 0; value < stakeholderValues.length; value++) {
    stakeholderValues[value] = 50;
}

const UtilitarianismSummary: FunctionComponent<UtilitarianismSummaryProps> = () => {
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
                    The last thing to consider is the type of pleasures contributing to the greatest happiness. It isn’t just how many 
                    stakeholders experience higher pleasures – you have to judge how much the higher pleasure should be worth in 
                    your final analysis.
                    </p>
                </div>
            </div>
            <div className="dashboard-page md:flex">
                <div className="dashboard-block w-2/3 mr-2">
                    <OptionsSummaryOutput option={{id: 1, valueST: valueChanged, valueLT: 50, highST: 0, lowST: 0, highLT: 0, lowLT: 0}} />
                    <OptionsSummaryOutput option={{id: 2, valueST: 50, valueLT: 50, highST: 0, lowST: 0, highLT: 0, lowLT: 0}} />
                </div>
                <div className="dashboard-block-1 w-1/3 ml-2">
                    <div className="dashboard-block">
                        <label className="dashboard-block-title">
                        ETHICAL DECISION/ COURSE OF ACTION <br></br>
                        </label>
                        <label className="dashboard-block-description">Enter in textbox below</label>
                        <textarea
                        rows={10}
                        className="dashboard-block-text-input mb-4"
                        placeholder="Sum up your analysis. Eg. Although Option 1 produces pleasures in the short-term, they are lower pleasures. Option 2 results in less overall pain and higher pleasures to the stakeholders most impacted by the issue."
                        ></textarea>
                        <label className="dashboard-block-title">
                        Option 2 will produce the greatest happiness and is therefore the right option.
                        </label>
                    </div>
                    </div>
            </div>
            <div className="flex justify-center items-center m-6">
                <div className="grid grid-cols-2 gap-4">
                    <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <Link to="/utilitarianism-stakeholders">Go Back</Link>
                    </button>
                    <button className="bg-primary hover:brightness-125 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <Link to="/dashboard">Submit</Link>
                    </button>
                </div>
            </div>
        </div>
    );

};

export default UtilitarianismSummary;