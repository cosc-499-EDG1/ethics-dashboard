import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
      //Write a navbar component using Tailwind with links to Home, Login and Dashboard
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Ethics Dashboard
          </span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to="/" className="navbar-link">
              Home
            </Link>
            <Link to="/login" className="navbar-link">
              Login
            </Link>
            <Link to="/dashboard" className="navbar-link">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
