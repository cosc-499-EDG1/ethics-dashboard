import React, { FunctionComponent } from "react";

interface StakeholderCareEthicsInputProps {
    stakeholder: {
        id: number;
        data: string;
        desc: string;
    }
}

const StakeholderCareEthicsInput: FunctionComponent<StakeholderCareEthicsInputProps> =
  ({stakeholder}) => {
    return (
      <div className="m-4 p-4 justify-center bg-white">
        <p className="text-3xl font-bold text-black">
          {stakeholder.data}
        </p>
        <p className="text-3xl font-bold text-gray-300">
            {stakeholder.desc}
        </p>
        <div className="md:flex">
            <div className="w-6/12 text-center my-2">
                <p className="text-3xl font-bold text-black">
                    Attentiveness
                </p>
                <p className="inline mx-3 font-bold text-xl">Low</p>
                <input className="w-8/12" type="range" min="1" max="10" defaultValue="5"></input>
                <p className="inline mx-3 font-bold text-xl">High</p>
            </div>
            <div className="w-6/12 text-center my-2">
                <p className="text-3xl font-bold text-black">
                    Competence
                </p>
                <p className="inline mx-3 font-bold text-xl">Low</p>
                <input className="w-8/12" type="range" min="1" max="10" defaultValue="5"></input>
                <p className="inline mx-3 font-bold text-xl">High</p>
            </div>
        </div>
        <div className="w-6/12 text-center my-2">
            <p className="text-3xl font-bold text-black">
                Responsiveness
            </p>
            <p className="inline mx-3 font-bold text-xl">Low</p>
            <input className="w-8/12" type="range" min="1" max="10" defaultValue="5"></input>
            <p className="inline mx-3 font-bold text-xl">High</p>
        </div>
    </div>
    );
  };

export default StakeholderCareEthicsInput;
