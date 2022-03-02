import { useStoreActions, useStoreState} from "../../stores/index.store";
import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "../global/form";
import { FormInput } from "../global/forminput";
import { Button } from "../global/button";

interface StakeholderProps {}




const Stakeholders: FunctionComponent<StakeholderProps> = () => {
    
    const stakeholder = useStoreActions((actions) => actions.stakeholder.addStakeholder);
    
    const [stakeholder1_title, setStakeholder1_title] = useState("");
    const [stakeholder2_title, setStakeholder2_title] = useState("");
    const [stakeholder3_title, setStakeholder3_title] = useState("");

    const [stakeholder1_desc, setStakeholder1_desc] = useState("");
    const [stakeholder2_desc, setStakeholder2_desc] = useState("");
    const [stakeholder3_desc, setStakeholder3_desc] = useState("");

    const [errorMessage, setErrorMessage] = useState("");
    const [redirect, setRedirect] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const attemptUpload = async () => {
        if(stakeholder1_title !== "" || stakeholder1_desc !== null){
            setIsLoading(true);
            const data = await stakeholder({ title: stakeholder1_title, description: stakeholder1_desc, num: 1});
            setIsLoading(false);
            setErrorMessage(data.message);
        }

        if(stakeholder2_title !== "" || stakeholder2_desc !== null){
            setIsLoading(true);
            const data = await stakeholder({ title: stakeholder2_title, description: stakeholder2_desc, num: 2});
            setIsLoading(false);
            setErrorMessage(data.message);
        }
        if(stakeholder3_title !== "" || stakeholder3_desc !== null){
            setIsLoading(true);
            const data = await stakeholder({ title: stakeholder3_title, description: stakeholder3_desc, num: 3});
            setIsLoading(false);
            setErrorMessage(data.message);
        }
        return;
    }
    

    const formInputs = [
        <FormInput
        key="stakeholder1_title"
        label="Stakeholder 1 title"
        type="text"
        placeholder="Stakeholder 1 Title"
        value={stakeholder1_title}
        onChange={(e) => setStakeholder1_title(e.target.value)}
        />,
        <FormInput
        key="stakeholder1_desc"
        label="Stakeholder 1 desc"
        type="text"
        placeholder="Stakeholder 1 Description"
        value={stakeholder1_desc}
        onChange={(e) => setStakeholder1_desc(e.target.value)}
        />,
        <FormInput
        key="stakeholder2_title"
        label="Stakeholder 2 title"
        type="text"
        placeholder="Stakeholder 2 Title"
        value={stakeholder2_title}
        onChange={(e) => setStakeholder2_title(e.target.value)}
        />,
        <FormInput
        key="stakeholder2_desc"
        label="Stakeholder 2 desc"
        type="text"
        placeholder="Stakeholder 2 Description"
        value={stakeholder2_desc}
        onChange={(e) => setStakeholder2_desc(e.target.value)}
        />,
        <FormInput
        key="stakeholder3_title"
        label="Stakeholder 3 title"
        type="text"
        placeholder="Stakeholder 3 Title"
        value={stakeholder3_title}
        onChange={(e) => setStakeholder3_title(e.target.value)}
        />,
        <FormInput
        key="stakeholder3_desc"
        label="Stakeholder 3 desc"
        type="text"
        placeholder="Stakeholder 3 Description"
        value={stakeholder3_desc}
        onChange={(e) => setStakeholder3_desc(e.target.value)}
        />

    ]
    const formActions = [
        <div className="">
            <Button text={"Submit"} formSubmit={true}/>
        </div>
    ]

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


            <Form
                inputs={formInputs}
                actions={formActions}
                isLoading={isLoading}
                wasSuccess={false}
                onSubmit={attemptUpload}
                message={errorMessage}
            />
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
                <button className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold w-1/12 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <Link to="/dashboard">Submit</Link>
                </button>
            </div>
            */}
        </div>
    );

};

export default Stakeholders;