import { FunctionComponent } from "react";

interface IssuesOptionProps {
    option: {
        id: number;
        data: string;
    }
}

const IssuesOption: FunctionComponent<IssuesOptionProps> =
  ({option}) => {
    return (
      <textarea
        rows={3}
        className="dashboard-block-text-input"
        placeholder={"Option "+option.id+"..."}
      ></textarea>
    );
  };

export default IssuesOption;
