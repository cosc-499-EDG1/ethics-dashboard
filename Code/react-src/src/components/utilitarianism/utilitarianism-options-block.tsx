import { FunctionComponent } from "react";

interface UtilitariansimOptionBlockProps {
    option: {
        id: number;
        data: string;
        short: string;
        long: string;
    }
    onChange: (index: number, value: string) => void;
    shortChange: (index: number, value: string) => void;
    longChange: (index: number, value: string) => void;
}

const UtilitarianismOptionBlock: FunctionComponent<UtilitariansimOptionBlockProps> =
  ({option, shortChange, longChange}) => {
    return (
        <div className="dashboard-block">
            <label className="dashboard-block-title">
            Option {option.id + 1}
            <p className="dashboard-block-description">
               {option.data}
            </p>
                <textarea
                rows={3}
                className="dashboard-block-text-input"
                placeholder={`Option ${option.id + 1} Short-term consequences...`}
                defaultValue={option.short}
                onChange={(e) => {
                shortChange(option.id, e.target.value);
                }}
            ></textarea>
            <textarea
            rows={3}
            className="dashboard-block-text-input"
            placeholder={`Option ${option.id +1} Long-term consequences...`}
            defaultValue={option.long}
            onChange={(e) => {
                longChange(option.id, e.target.value);
            }}>
            </textarea>  
            </label>
        </div>
      
    );
  };

export default UtilitarianismOptionBlock;
