import { FunctionComponent } from "react";

interface OptionsPleasureOutputProps {
    option: {
        id: number;
        valueST: number;
        valueLT: number;
    }
}

const OptionsPleasureOutput: FunctionComponent<OptionsPleasureOutputProps> =
  ({option}) => {
    return (
    <div className="dashboard-block">
        <label className="dashboard-block-title">
            Option {option.id}
            <p className="dashboard-block-description">
                Aggregate of short-term outcomes
            </p>
            <div className="h-24 my-2 flex justify-center items-center bg-white">
                <p className="inline mx-3 text-lg">Pleasure</p>
                <input className="average-slider" type="range" min="0" max="100" value={option.valueST}></input>
                <p className="inline mx-3 text-lg">Pain</p>
            </div>
            <p className="dashboard-block-description">
                Aggregate of long-term outcomes
            </p>
            <div className="h-24 my-2 flex justify-center items-center bg-white">
                <p className="inline mx-3 text-lg">Pleasure</p>
                <input className="average-slider" type="range" min="0" max="100" value={option.valueLT}></input>
                <p className="inline mx-3 text-lg">Pain</p>
            </div>
        </label>
    </div>
    );
  };

export default OptionsPleasureOutput;