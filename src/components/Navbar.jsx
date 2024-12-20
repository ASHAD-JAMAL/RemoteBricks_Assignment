import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">My App</h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white hover:text-blue-200 transition duration-200"
            >
              Todo List
            </Link>
          </li>
          <li>
            <Link
              to="/employees"
              className="text-white hover:text-blue-200 transition duration-200"
            >
              Employee List
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
