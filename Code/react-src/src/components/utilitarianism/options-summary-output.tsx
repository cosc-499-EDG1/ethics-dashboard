import { FunctionComponent } from "react";

interface OptionsSummaryOutputProps {
    option: {
        id: number;
        valueST: number;
        valueLT: number;
        highST: number;
        lowST: number;
        highLT: number;
        lowLT: number;
    }
}

const OptionsSummaryOutput: FunctionComponent<OptionsSummaryOutputProps> =
  ({option}) => {
    return (
    <div className="dashboard-block-1">
        <label className="dashboard-block-title">
            Option {option.id}
            <p className="dashboard-block-description">
                Aggregate of short-term outcomes
            </p>
            <div className="h-24 my-2 flex justify-center items-center bg-white">
                <p className="inline mx-3 text-lg">Pleasure</p>
                <input className="average-slider" type="range" min="0" max="100" value={option.valueST}></input>
                <p className="inline mx-3 text-lg">Pain</p>
                <p className="inline ml-16 w-56 text-lg">High: {option.highST}</p>
                <p className="inline w-56 text-lg">Low: {option.lowST}</p>
            </div>
            <p className="dashboard-block-description">
                Aggregate of long-term outcomes
            </p>
            <div className="h-24 my-2 flex justify-center items-center bg-white">
            <p className="inline mx-3 text-lg">Pleasure</p>
                <input className="average-slider" type="range" min="0" max="100" value={option.valueST}></input>
                <p className="inline mx-3 text-lg">Pain</p>
                <p className="inline ml-16 w-56 text-lg">High: {option.highLT}</p>
                <p className="inline w-56 text-lg">Low: {option.lowLT}</p>
            </div>
        </label>
    </div>
    );
  };

export default OptionsSummaryOutput;