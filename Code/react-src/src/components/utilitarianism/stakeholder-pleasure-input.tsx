import { FunctionComponent } from "react";

interface StakeholderPleasureInputProps {
    stakeholder: {
        id: number;
        data: string;
        value: number;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }
}

const StakeholderPleasureInput: FunctionComponent<StakeholderPleasureInputProps> =
  ({stakeholder}) => {
    return (
      <div className="dashboard-block-1">
        <p className="dashboard-block-title">Stakeholder {stakeholder.id}</p>
        <p className="dashboard-block-description">
          {stakeholder.data}
        </p>
        <div className="flex flex-wrap">
          <div className="w-1/2 h-24 my-2 flex justify-center items-center bg-white">
            <p className="inline mx-3 text-lg">Pleasure</p>
            <input className="w-1/2" type="range" min="0" max="10" defaultValue={stakeholder.value} onChange={stakeholder.onChange} id={stakeholder.id.toString()}></input>
            <p className="inline mx-3 text-lg">Pain</p>
          </div>
          <div className="w-1/2 h-24 my-2 grid place-items-center bg-secondary">
            <input
              type="text"
              className="w-4/6 h-6 border-2 border-black bg-white"
              placeholder="Explanation..."
            ></input>
            <div className="inline-flex text-base">
              <p className="inline mx-2">Pleasure: </p>
              <label>
                High
                <input
                  type="radio"
                  name="pleasure"
                  value="High"
                  className="mx-2"
                ></input>
              </label>
              <label>
                Low
                <input
                  type="radio"
                  name="pleasure"
                  value="Low"
                  className="mx-2"
                ></input>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default StakeholderPleasureInput;
