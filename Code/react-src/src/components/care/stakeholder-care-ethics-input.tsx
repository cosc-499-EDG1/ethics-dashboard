import React, { FunctionComponent } from "react";

interface StakeholderCareEthicsInputProps {
    stakeholder: {
        id: number;
        data: string;
        desc: string;
        attentivenessValue: number;
        competenceValue: number;
        responsivenessValue: number;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }
}

const StakeholderCareEthicsInput: FunctionComponent<StakeholderCareEthicsInputProps> =
  ({stakeholder}) => {
    return (
      <div className="dashboard-block-1">
        <p className="dashboard-block-title">
          {stakeholder.data}
        </p>
        <p className="dashboard-block-description">
            {stakeholder.desc}
        </p>
        <div className="pt-1 pb-3 bg-white">
            <div className="md:flex">
                <div className="w-6/12 text-center my-2">
                    <p className="text-3xl font-bold text-black">
                        Attentiveness
                    </p>
                    <p className="inline mx-3 font-bold text-xl">Low</p>
                    <input className="w-6/12" type="range" min="0" max="10" defaultValue="5" onChange={stakeholder.onChange} id={stakeholder.id.toString()+"-1"}></input>
                    <p className="inline mx-3 font-bold text-xl">High</p>
                </div>
                <div className="w-6/12 text-center my-2">
                    <p className="text-3xl font-bold text-black">
                        Competence
                    </p>
                    <p className="inline mx-3 font-bold text-xl">Low</p>
                    <input className="w-6/12" type="range" min="0" max="10" defaultValue="5" onChange={stakeholder.onChange} id={stakeholder.id.toString()+"-2"}></input>
                    <p className="inline mx-3 font-bold text-xl">High</p>
                </div>
            </div>
            <div className="w-6/12 text-center my-2">
                <p className="text-3xl font-bold text-black">
                    Responsiveness
                </p>
                <p className="inline mx-3 font-bold text-xl">Low</p>
                <input className="w-6/12" type="range" min="0" max="10" defaultValue="5" onChange={stakeholder.onChange} id={stakeholder.id.toString()+"-3"}></input>
                <p className="inline mx-3 font-bold text-xl">High</p>
            </div>
        </div>
    </div>
    );
  };

export default StakeholderCareEthicsInput;
