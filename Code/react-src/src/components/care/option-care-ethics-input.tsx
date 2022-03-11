import React, { FunctionComponent } from "react";

interface OptionCareEthicsInputProps {
    option: {
        id: number;
        data: string;
        color: string;
        value: number;
    }
}

const OptionCareEthicsInput: FunctionComponent<OptionCareEthicsInputProps> =
  ({option}) => {
    return (
        <div className="dashboard-block">
            <div className={option.color}>
                <p className="dashboard-block-title">
                    {option.data}
                </p>
                <p className="text-xl font-bold mt-4 mb-2">
                    Duty of Care
                </p>
                
                <div className="mt-1 mb-3 h-20 flex justify-center items-center bg-white">
                    <p className="inline mx-3 font-bold text-xl">Low</p>
                    <input className="average-slider" type="range" min="0" max="100" value={option.value} id={option.id.toString()}></input>
                    <p className="inline mx-3 font-bold text-xl">High</p>
                </div>
            </div>
        </div>
    );
  };

export default OptionCareEthicsInput;
