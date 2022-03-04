import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";

interface DeontologyCategoricalProps {
   
}

const DeontologyCategorical: FunctionComponent<DeontologyCategoricalProps> = () => {
    /*const formState = {
        yourInterests: false,
        someonesInterests: false,
        lookGood: false,
        longRun: false,
        everybodyWins: false,
        revenge: false,
        other: false,
        rightThing: false,
        otherText: ""
    }; */
    const [yourInterests, setYourInterests] = useState(false);
    const [someonesInterests, setSomeonesInterests] = useState(false);
    const [lookGood, setLookGood] = useState(false);
    const [longRun, setLongRun] = useState(false);
    const [everyBodyWins, setEverybodyWins] = useState(false);
    const [revenge, setRevenge] = useState(false);
    const [other, setOther] = useState(false);
    const [rightThing, setrightThing] = useState(false);
    const [otherText, setOtherText] = useState("");

    const motivationSubmit = () => {

    }
/*
    const checkboxHandler = (event) => {
        event.preventDefault();
        formState[yourInterests] = event.target.checked;
    };
  */ 
    return(
        <div className="site-dashboard">
            <div className="dashboard-title">
                <div className="dashboard-title-text">
                    <h1>Deontology</h1>
                </div>
                <div className="dashboard-title-description">
                    <p>CATEGORIACAL IMPERATIVES</p>
                    <p>The fundamental principle of our moral duties is a categorical imperative.</p>
                    <p> • It is an imperative because it is a command addressed to agents who could follow it but might not</p>
                    <p> • It is categorical in virtue of applying to us unconditionally – in all times and all places</p>
                    <p>Unlike hypothetical imperatives, categorical imperatives are not relative to a desire or goal</p>
                </div>
            </div>
            <div className="md:flex">
                <div className="dashboard-hypotheticalblock">
                    <div className="dashboard-options">
                        <label className="text-3xl font-bold">
                            You selected the following reasons to support OPTION 1:
                        </label>
                    </div>
                    <form>

                        <div className="dashboard-motivation">
                            <input onChange={e => setYourInterests(e.target.checked)} type="checkbox" value="yourInterests" disabled></input>
                            <label className="mx-4 text-2xl font-bold">Serves your interests</label><br></br>
                            <input onChange={e => setSomeonesInterests(e.target.checked)} type="checkbox" value="someonesInterests" disabled></input>
                            <label className="mx-4 text-2xl font-bold">Serves the interests of someone else you want to impress</label><br></br>
                            <input onChange={e => setLookGood(e.target.checked)} type="checkbox" value="lookGood" disabled></input>
                            <label className="mx-4 text-2xl font-bold">It will look good</label><br></br>
                            <input onChange={e => setLongRun(e.target.checked)} type="checkbox" value="longRun" disabled></input>
                            <label className="mx-4 text-2xl font-bold">It will pay off in the long run</label><br></br>
                            <input onChange={e => setEverybodyWins(e.target.checked)} type="checkbox" value="everybodyWins" disabled></input>
                            <label className="mx-4 text-2xl font-bold">Everybody wins</label><br></br>
                            <input onChange={e => setRevenge(e.target.checked)} type="checkbox" value="revenge" disabled></input>
                            <label className="mx-4 text-2xl font-bold">Revenge</label><br></br>
                            <input onChange={e => setOther(e.target.checked)} type="checkbox" value="other" disabled></input>
                            <label className="mx-4 text-2xl font-bold">Other</label>
                            <input onChange={e => setOtherText(e.target.value)} type="text" disabled></input><br></br>
                            <input onChange={e => setrightThing(e.target.checked)} type="checkbox" value="rightThing" disabled></input>
                            <label className="mx-4 text-2xl font-bold">It's the right thing to do</label><br></br>
                        </div>
                    </form>
                    
                    <div className="dashboard-hypothetical">
                        <label className="text-3xl font-bold">
                        This motivation is consistent with categorical reasoning and therefore may support a universal law of moral action; 
                        however, the law must be defined, universal and consistent.</label>
                    </div>
                </div>
                <div className="dashboard-aggregate">
                    <div className="bg-gray-300 p-6 my-6">
                        <label className="text-3xl font-bold">
                            Option 1
                            <div className="h-24 my-2 flex justify-center items-center bg-white">
                                <p className="inline mx-3 text-lg text-black">This reasoning is consistent with categorical reasoning and 
                                therefore may support a moral action.</p>
                            </div>
                        </label>
                    </div>
                    <div className="bg-gray-300 p-6 my-6">
                        <label className="text-3xl font-bold">
                            Option 2
                            <div className="h-24 my-2 flex justify-center items-center bg-white">
                                <p className="inline mx-3 text-lg text-gray-300">This reasoning is consistent with [hypothetical/categorical] reasoning and 
                                therefore [cannot/may] support a moral action.</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center m-6">
                <div className="grid grid-cols-2 gap-4">
                    <button onClick={() => motivationSubmit()} className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <Link to="/utilitarianism-stakeholders">Go Back</Link>
                    </button>
                    <button className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <Link to="/">Next</Link>
                    </button>
                </div>
            </div>
        </div>
    );

};

export default DeontologyCategorical;