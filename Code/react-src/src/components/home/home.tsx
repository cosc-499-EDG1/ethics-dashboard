import React from "react";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { useStoreState } from "../../stores/main.store";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const isLoggedIn = useStoreState(state => state.isLoggedIn);
  const account = useStoreState((state) => state.account);
  return (
    <div className="site-main">
      <div className="bg-blue-700 p-5 flex items-start justify-center flex-col w-6/12 rounded-lg shadow-lg">
        {isLoggedIn && account ? (
          <div>
            Email: {account.email}
            <br></br>
            Username: {account.username}
            <img src={account.avatar} alt="avatar" />
          </div>
        ) : (
          <React.Fragment>
            <h1 className="text-5xl text-white font-bold">
              Site under construction
            </h1>
            <p className="text-[#fff]">
              Come back later when it is all polished up.
            </p>
            <button className="btn">
              <Link to="/Login">Login</Link>
            </button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Home;
