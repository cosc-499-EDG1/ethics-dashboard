import { FunctionComponent, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useStoreState } from "../stores/index.store";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const isLoggedIn = useStoreState((state) => state.accounts.isLoggedIn);
  const account = useStoreState((state) => state.accounts.account);

  
  // const currentDashboard = useStoreState((state) => state.dashboard.currentId);
  const currentDashboard = 1;

  // Re-render when logged in state changes.
  useEffect(() => {}, [isLoggedIn]);

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
      show: true,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      show: !!currentDashboard,
    },
    // {
    //   name: "Ethical Issues",
    //   path: "/Issues",
    //   show: isLoggedIn,
    // },
    // {
    //   name: "Stakeholders",
    //   path: "/stakeholders",
    //   show: isLoggedIn,
    // },
    // {
    //   name: "Utilitarianism",
    //   path: "/utilitarianism-options",
    //   show: isLoggedIn,
    // },
    {
      name: (
        <span className="relative pl-8">
          {account?.avatar && (
            <span className="absolute -left-1 -top-1 max-w-full">
              <img
                src={account.avatar as unknown as string}
                alt={account?.first_name}
                className="w-8 h-8 rounded-full max-w-max"
              />
            </span>
          )}
          {account?.first_name} {account?.last_name}
        </span>
      ),
      path: "/myaccount",
      show: isLoggedIn,
      right: true,
    },
    {
      name: <span>Logout</span>,
      path: "/logout",
      show: isLoggedIn,
      right: true,
    },
    {
      name: "Login",
      path: "/login",
      show: !isLoggedIn,
      right: true,
    },
    {
      name: "Register",
      path: "/register",
      show: !isLoggedIn,
      right: true,
    },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex w-full">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">
                  Ethics Dashboard
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center ml-4">
              <div>
                {navLinks
                  .filter((link) => !link.right && link.show)
                  .map((link, index) => {
                    return (
                      <NavLink
                        key={index}
                        to={link.path}
                        exact={link.path === "/"}
                        activeClassName="nav-link-active"
                        className="nav-link"
                      >
                        {link.name}
                      </NavLink>
                    );
                  })}
              </div>
            </div>
            <div className="hidden md:flex items-center ml-auto">
              <div>
                {navLinks
                  .filter((link) => link.right && link.show)
                  .map((link, index) => {
                    return (
                      <NavLink
                        to={link.path}
                        key={index}
                        activeClassName="nav-link-active"
                        className="nav-link"
                      >
                        {link.name}
                      </NavLink>
                    );
                  })}
              </div>
            </div>
            <div className="md:hidden flex items-center absolute right-8 top-3.5">
              <button
                className="outline-none mobile-menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  className="w-8 h-8 text-gray-500 hover:text-primary"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            <ul
              className={`${
                !menuOpen && "hidden"
              } md:hidden text-right mt-12 pb-5`}
            >
              {navLinks
                .filter((link) => link.show)
                .map((link, index) => {
                  return (
                    <li key={index} className="p-3">
                      <NavLink
                        to={link.path}
                        exact={true}
                        activeClassName="nav-link-active"
                        className="nav-link"
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
