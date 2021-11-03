import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <div className="site-main">
      <div className="bg-blue-700 p-5 flex items-start justify-center flex-col w-6/12 rounded-lg shadow-lg">
        <h1 className="text-5xl text-white font-bold">
          Site under construction
        </h1>
        <p className="text-[#fff]">
          Come back later when it is all polished up.
        </p>
        <button className="btn">
          <Link to="/Login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
