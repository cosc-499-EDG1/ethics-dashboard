import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";

interface MyProgressReportProps {}

const MyProgressReport: FunctionComponent<MyProgressReportProps> = () => {
  const categories: any = [
    ["Ethical Issue & Options", 10],
    ["Stakeholders", 10],
    ["Utilitarianism", 15],
    ["Deontology", 15],
    ["Virtue Ethics", 15],
    ["Care Ethics", 15],
  ];

  const [values, setCurrentValues] = useState<{ [key: string]: number }>({});
  const [currentTotal, setCurrentTotal] = useState(0);

  const handleValueChange = (name: string, points: number) => {
    setCurrentValues({
      ...values,
      [name]: +points,
    });
    setCurrentTotal(
      Object.values({
        ...values,
        [name]: +points,
      }).reduce((acc, val) => acc + val, 0)
    );
  };

  return (
    <div className="site-dashboard">
      <div className="pt-20 px-20">
        <div className="font-bold justify-center text-center text-7xl">
          <h1>My Progress</h1>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap justify-around gap-1">
        {categories.map(([category, percent]: any) => (
          <ProgressCategory
            name={category}
            points={percent}
            setCurrentValue={handleValueChange}
          />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <div className="md:block">
          {categories.map(([category, percent]: any) => (
            <div className="mb-2 w-144 flex justify-between">
              <p className="text-4xl font-bold text-black">{category}</p>
              <p className="text-4xl font-bold text-black">{values[category] ?? 0} / {percent}</p>
            </div>
          ))}

          <div className="mt-4 mb-8 w-144 h-48 bg-gray-300">
            <div className="p-4 flex justify-between">
              <p className="text-6xl font-bold text-black">TOTAL:</p>
              <p className="text-6xl font-bold text-blue-500">
                {currentTotal}/88
              </p>
            </div>
            <div className="p-4 flex justify-end">
              <p className="text-6xl font-bold text-blue-500">
                {((currentTotal / 88) * 100).toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProgressReport;

interface CategoryProgressProps {
  name: string;
  points: number;
  setCurrentValue: Function;
}

const ProgressCategory: FunctionComponent<CategoryProgressProps> = ({
  name,
  points,
  setCurrentValue,
}) => {
  const [value, setValue] = useState<string | number>("");

  return (
    <div className="h-96 w-[32rem] bg-gray-300 rounded-lg shadow-lg mt-5">
      <div className="p-4">
        <label className="text-4xl flex justify-center font-bold text-black">
          {name}
        </label>
      </div>
      <div className="pb-4 flex justify-center">
        <div className="w-44 p-3 flex justify-center border-4 border-black">
          <input
            type="number"
            className="text-xl font-bold w-12 mr-4 text-center"
            value={value}
            onChange={(e) => {
              let val: string | number = e.target.value;
              if (+val > points) {
                val = points;
              }
              setValue(val || "");
              setCurrentValue(name, val || 0);
            }}
          ></input>
          <label className="text-4xl font-bold text-black">/ {points}</label>
        </div>
      </div>
      <div className="pt-5 px-4">
        <label className="text-2xl flex justify-center font-bold text-black">
          Comments &amp; Summary
        </label>
      </div>
      <div className="mt-5 px-5">
        <textarea
          rows={4}
          className="w-full border-none text-lg"
          placeholder="Comments &amp; Summary..."
        ></textarea>
      </div>
    </div>
  );
};
