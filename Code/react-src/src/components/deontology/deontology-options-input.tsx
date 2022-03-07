import React, { FunctionComponent } from "react";
import OptionsPleasureOutput from "../utilitarianism/options-pleasure-output";

interface DeontologyOptionsInputProps {
    option: {
        id: number;
        desc: string;
        yourInterests: boolean;
        someonesInterests: boolean;
        lookGood: boolean;
        longRun: boolean;
        everybodyWins: boolean;
        revenge: boolean;
        other: boolean;
        rightThing: boolean;
    }
}

const DeontologyOptionsInput: FunctionComponent<DeontologyOptionsInputProps> =
  ({option}) => {
    return (
    <div className="min-w-384px">
        <div className="dashboard-block-1 mr-4 min-h-40">
          <label className="dashboard-block-title">
            Option {option.id}
            <p className="dashboard-block-description">
              {option.desc}
            </p>
          </label>
        </div>
        <div className="dashboard-block-1 mr-4">
          <div className="dashboard-block-title">
            What is your motivation?
            <br></br>
            <input type="checkbox" value="yourInterests" defaultChecked={option.yourInterests}></input>
            <label className="mx-4 text-lg">Serves your interests</label>
            <br></br>
            <input type="checkbox" value="someonesInterests" defaultChecked={option.someonesInterests}></input>
            <label className="mx-4 text-lg">
              Serves the interests of someone else you want to impress
            </label>
            <br></br>
            <input type="checkbox" value="lookGood" defaultChecked={option.lookGood}></input>
            <label className="mx-4 text-lg">It will look good</label>
            <br></br>
            <input type="checkbox" value="longRun" defaultChecked={option.longRun}></input>
            <label className="mx-4 text-lg">
              It will pay off in the long run
            </label>
            <br></br>
            <input type="checkbox" value="everybodyWins" defaultChecked={option.everybodyWins}></input>
            <label className="mx-4 text-lg">Everybody wins</label>
            <br></br>
            <input type="checkbox" value="revenge" defaultChecked={option.revenge}></input>
            <label className="mx-4 text-lg">Revenge</label>
            <br></br>
            <input type="checkbox" value="other" defaultChecked={option.other}></input>
            <label className="mx-4 text-lg">Other</label>
            <input type="text"></input>
            <br></br>
            <input type="checkbox" value="rightThing" defaultChecked={option.rightThing}></input>
            <label className="mx-4 text-lg">
              It's the right thing to do
            </label>
            <br></br>
          </div>
        </div>
    </div>
    );
  };

export default DeontologyOptionsInput;
