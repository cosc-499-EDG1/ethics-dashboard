import React, { ReactElement } from "react";

type FormProps = {
  inputs: ReactElement[];
  actions: ReactElement[];
  isLoading: boolean;
  message: string;
  wasSuccess: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const Form = ({
  inputs,
  actions,
  isLoading,
  message,
  wasSuccess,
  onSubmit,
}: FormProps) => {
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
      <div className="flex items-center justify-between">
        {actions.map((action, i) => {
          return <React.Fragment key={i}>{action}</React.Fragment>;
        })}
      </div>
    </form>
  );
};
