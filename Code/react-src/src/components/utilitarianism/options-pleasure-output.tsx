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
        <div className="bg-gray-300 p-6 my-6">
        <label className="text-3xl font-bold">
            Option {option.id}
            <p className="mt-5 text-3xl font-bold text-blue-700">
                Aggregate of short-term outcomes
            </p>
            <div className="h-24 my-2 flex justify-center items-center bg-white">
                <p className="inline mx-3">Pleasure</p>
                <input className="average-slider" type="range" min="0" max="100" value={option.valueST}></input>
                <p className="inline mx-3">Pain</p>
            </div>
            <p className="mt-5 text-3xl font-bold text-red-700">
                Aggregate of long-term outcomes
            </p>
            <div className="h-24 my-2 flex justify-center items-center bg-white">
                <p className="inline mx-3">Pleasure</p>
                <input className="average-slider" type="range" min="0" max="100" value={option.valueLT}></input>
                <p className="inline mx-3">Pain</p>
            </div>
        </label>
    </div>
    );
  };

export default OptionsPleasureOutput;