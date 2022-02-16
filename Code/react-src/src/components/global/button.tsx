type ButtonProps = {
  text: string;
  formSubmit?: boolean;
};

export const Button = ({ text, formSubmit }: ButtonProps) => {
  if (formSubmit) {
    return (
      <button type="submit" className="btn">
        {text}
      </button>
    );
  }
  return <div className="btn">{text}</div>;
};
