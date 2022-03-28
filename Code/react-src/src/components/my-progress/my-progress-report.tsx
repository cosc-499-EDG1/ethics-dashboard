import { FunctionComponent, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import dashboardService from "../../services/dashboard.service";
import { useStoreState } from "../../stores/index.store";

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

  const availablePoints = categories.reduce(
    (acc: any, curr: any[]) => acc + curr[1],
    0
  );

  const hasMarkingAccess = useStoreState(
    (state) => state.accounts.hasMarkingAccess
  );

  const [values, setCurrentValues] = useState<{ [key: string]: number }>({});
  const [currentTotal, setCurrentTotal] = useState(0);

  const currentDashboard =
    useStoreState((state) => state.dashboard.dashboard_id) ?? 0;

  const { isLoading, isError } = useQuery(
    "dashboard-progress",
    async () => {
      return await dashboardService.getDashboardProgress({
        id: currentDashboard,
      });
    },
    { onSuccess: (data) => {} }
  );

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
      <div className="dashboard-title">
        <div className="dashboard-title-text">
          <h1>My Progress</h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-around gap-1">
        {categories.map(([category, percent]: any, idx: number) => (
          <ProgressCategory
            key={idx}
            name={category}
            points={percent}
            hasMarkingAccess={hasMarkingAccess}
            setCurrentValue={handleValueChange}
          />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <div className="md:block">
          {categories.map(([category, percent]: any, idx: number) => (
            <div key={idx} className="mb-2 w-144 flex justify-between">
              <p className="text-4xl font-bold text-black">{category}</p>
              <p className="text-4xl font-bold text-black">
                {values[category] ?? 0} / {percent}
              </p>
            </div>
          ))}

          <div className="dashboard-block w-144 h-52">
            <div className="p-4 flex justify-between">
              <p className="text-6xl font-bold text-black">TOTAL:</p>
              <p className="text-6xl font-bold text-blue-500">
                {currentTotal}/{availablePoints}
              </p>
            </div>
            <div className="p-4 flex justify-end">
              <p className="text-6xl font-bold text-blue-500">
                {((currentTotal / availablePoints) * 100).toFixed(2)}%
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
  hasMarkingAccess: boolean;
}

const ProgressCategory: FunctionComponent<CategoryProgressProps> = ({
  name,
  points,
  setCurrentValue,
  hasMarkingAccess,
}) => {
  const [value, setValue] = useState<string | number>("");

  return (
    <div className="dashboard-block w-3/12">
      <label className="mb-4 text-3xl flex justify-center font-bold text-black text-center">
        {name}
      </label>
      <div className="pb-4 flex justify-center">
        <div className="w-44 p-3 flex justify-center border-4 border-black rounded-md">
          <input
            type="number"
            className="text-xl font-bold w-12 mr-4 text-center"
            disabled={!hasMarkingAccess}
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
      <textarea
        rows={4}
        disabled={!hasMarkingAccess}
        className="dashboard-block-text-input mt-2"
        placeholder="Comments &amp; Summary..."
      ></textarea>
    </div>
  );
};
