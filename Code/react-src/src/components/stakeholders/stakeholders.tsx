import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface StakeholderProps {}

const Stakeholders: FunctionComponent<StakeholderProps> = () => {
    return(
        <div className="site-dashboard">
            <div className="dashboard-title">
                <div className="dashboard-title-text">
                    <h1>Stakeholder Description</h1>
                </div>
                <div className="dashboard-title-description">
                    <p>
                    Stakeholders are persons or groups that will be impacted by the decision/action taken. List the stakeholders and what they want in the simplest terms – wealth, social status, etc. Note: It’s good to start with the decision-maker as the first stakeholder and then work out from there.
                    </p>
                </div>
            </div>
            <div className="pt-30">
                <p>
                    
                </p>
            </div>
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
                <button className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold w-1/12 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <Link to="/">Submit</Link>
                </button>
            </div>
        </div>
    );

};

export default Stakeholders;