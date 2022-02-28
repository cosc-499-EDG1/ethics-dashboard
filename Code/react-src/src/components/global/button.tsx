import { MouseEventHandler } from "react";

type ButtonProps = {
  text: string;
  formSubmit?: boolean;
  classes?: any;
  onClick?: any;
};

export const Button = ({ text, formSubmit, classes, onClick }: ButtonProps) => {
  if (formSubmit) {
    return (
      <button type="submit" className="btn">
        {text}
      </button>
    );
  }
  return <div className={`btn ${classes}`} onClick={onClick}>{text}</div>;
};
