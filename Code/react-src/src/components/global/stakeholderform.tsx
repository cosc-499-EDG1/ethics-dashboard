import React, { ReactElement } from "react";

type StakeholderFormProps = {
  inputs: ReactElement[];
  actions: ReactElement[];
  isLoading: boolean;
  message: string;
  wasSuccess: boolean;
  numStakeholders: number;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setNumStakeholders?: any;
};

export const StakeholderForm = ({
  inputs,
  actions,
  isLoading,
  message,
  wasSuccess,
  numStakeholders,
  onSubmit,
  setNumStakeholders,
}: StakeholderFormProps) => {
  const changeNumStakeholders = async (increase: boolean) => {
    if (increase === true) {
      if (numStakeholders < 9) {
        setNumStakeholders(numStakeholders+1);
      }
    } else {
      if (numStakeholders > 3) {
        setNumStakeholders(numStakeholders-1);
      }
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
      noValidate
    >
      {message && !isLoading && (
        <div
          className={`${
            wasSuccess ? "text-green-500" : "text-red-500"
          } text-center italic font-bold`}
        >
          {message}
        </div>
      )}
      {isLoading && (
        <div className="flex justify-center">
          <div className="loading-spinner w-16 h-16"></div>
        </div>
      )}
      {inputs.map((input, i) => {
        return <React.Fragment key={i}>{input}</React.Fragment>;
      })}
      <div className="text-center justify-center">
        <button className="bg-primary hover:brightness-110 text-white text-lg font-bold py-2 mx-2 w-40 rounded-md focus:outline-none focus:shadow-outline"
        onClick={() => changeNumStakeholders(true)}>
          Add Option
        </button>
        <button className="bg-primary hover:brightness-110 text-white text-lg font-bold py-2 mx-2 w-40 rounded-md focus:outline-none focus:shadow-outline"
        onClick={() => changeNumStakeholders(false)}>
          Remove Option
        </button>
      </div>
      <div className="pt-4 flex items-center justify-center">
        {actions.map((action, i) => {
          return <React.Fragment key={i}>{action}</React.Fragment>;
        })}
      </div>
    </form>
  );
};
