"react";

import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-4 py-6 shadow-lg">
        <Logo></Logo>

        <ul className="flex gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-gray-900 bg-blue-400 underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-gray-900 bg-blue-400 underline"
                  : ""
              }
            >
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-gray-900 bg-blue-400 underline"
                  : ""
              }
            >
              Login
            </NavLink>
          </li>
          
        </ul>

      </nav>
    </div>
  );
};

export default NavBar;
