import { FunctionComponent } from "react";

interface StakeholderPleasureInputProps {
    stakeholder: {
        id: number;
        data: string;
        value: number;
        optionId: number;
        explanation: string;
    }
    ValueChange: (optindex: number, stkindex: number, value: string) => void;
    PleasureChange: (optindex: number, stkindex: number, value: string) => void;
    explanationChange: (optindex: number, stkindex: number, value: string) => void;
}

const StakeholderPleasureInput: FunctionComponent<StakeholderPleasureInputProps> =
  ({stakeholder, ValueChange, PleasureChange, explanationChange}) => {
    return (
      <div className="dashboard-block-1">
        <p className="dashboard-block-title">Stakeholder {stakeholder.id + 1}</p>
        <p className="dashboard-block-description">
          {stakeholder.data}
        </p>
        
        <div className="flex flex-wrap">
          <div className="w-1/2 h-24 my-2 flex justify-center items-center bg-white">
            <p className="inline mx-3 text-lg">Pleasure</p>
            <input className="w-1/2" type="range" min="0" max="10" defaultValue={stakeholder.value} onChange={(e) => ValueChange(0, stakeholder.id, e.target.value)} id={stakeholder.id.toString()}></input>
            <p className="inline mx-3 text-lg">Pain</p>
          </div>
          <div className="w-1/2 h-24 my-2 grid place-items-center bg-secondary">
            <textarea
            rows={2}
            className="dashboard-block-text-input"
            placeholder={"Explanation..."}
            defaultValue={stakeholder.explanation}
            onChange={(e) => {
              explanationChange(stakeholder.optionId, stakeholder.id, e.target.value);
            }}
            ></textarea>
            <div className="inline-flex text-base">
              <p className="inline mx-2">Pleasure: </p>
              <label>
                Is this a High Pleasure?
                <input
                  type="checkbox"
                  name="pleasure"
                  value="High"
                  className="mx-2"
                  onChange={(e) => {
                    PleasureChange(0, stakeholder.id, e.target.value);
                  }}
                ></input>
              </label>
            </div>
          </div>
        </div> 
      </div>
    );
  };

export default StakeholderPleasureInput;
