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
      <div className="pt-30">
        <p></p>
      </div>
      <div className="dashboard-page md:flex">
        <div className="dashboard-block w-2/3 mr-2">
          <div className="dashboard-block-1">
            <label className="dashboard-block-title">
              You selected the following reasons to support OPTION 1:
            </label>
            <div className="dashboard-block-title mt-4">
              <input type="checkbox" value="your-interests" disabled></input>
              <label className="mx-4 text-2xl font-bold">
                Serves your interests
              </label>
              <br></br>
              <input type="checkbox" value="someones-interests" disabled></input>
              <label className="mx-4 text-2xl font-bold">
                Serves the interests of someone else you want to impress
              </label>
              <br></br>
              <input type="checkbox" value="look-good" disabled></input>
              <label className="mx-4 text-2xl font-bold">It will look good</label>
              <br></br>
              <input type="checkbox" value="long-run" disabled></input>
              <label className="mx-4 text-2xl font-bold">
                It will pay off in the long run
              </label>
              <br></br>
              <input type="checkbox" value="everybody-wins" disabled></input>
              <label className="mx-4 text-2xl font-bold">Everybody wins</label>
              <br></br>
              <input type="checkbox" value="revenge" disabled></input>
              <label className="mx-4 text-2xl font-bold">Revenge</label>
              <br></br>
              <input type="checkbox" value="other" disabled></input>
              <label className="mx-4 text-2xl font-bold">Other</label>
              <input type="text" disabled></input>
              <br></br>
              <input type="checkbox" value="right-thing" disabled></input>
              <label className="mx-4 text-2xl font-bold">
                It's the right thing to do
              </label>
              <br></br>
            </div>
          </div>
          <div className="dashboard-block-1">
            <label className="dashboard-block-title">
              These motivations are consistent with CATEGORICAL reasoning and
              therefore MAY be a universal law of moral action.
            </label>
          </div>
        </div>
        <div className="dashboard-block-1 w-1/3 ml-2">
          <div className="dashboard-block">
            <label className="dashboard-block-title">
              Option 1
              <p className="dashboard-block-description">
                This reasoning is consistent with CATEGORICAL
                reasoning and therefore MAY support a moral action.
              </p>
            </label>
          </div>
          <div className="dashboard-block">
            <label className="dashboard-block-title">
              Option 2
              <p className="dashboard-block-description">
                This reasoning is consistent with [HYPOTHETICAL/CATEGORICAL]
                reasoning and therefore [CANNOT/MAY] support a moral action.
              </p>
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center m-6">
        <div className="grid grid-cols-2 gap-4">
          <Link to="/deontology-options">
            <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Go Back
            </button>
          </Link>
          <Link to="/deontology-testing-categorical">
            <button className="bg-primary hover:brightness-125 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
    );

};

export default DeontologyCategorical;