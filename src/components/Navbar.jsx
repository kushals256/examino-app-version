import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-700 py-4 px-4 sm:px-6 lg:px-8 w-full z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/logo.png"
            className="h-12"
            alt="Logo"
          />
          <span className="text-2xl font-semibold whitespace-nowrap text-white">
            Examino App
          </span>
        </Link>

        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className={`text-lg font-medium transition-colors duration-300 group relative cursor-pointer 
                    ${
                      location.pathname === path
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-1000/20 px-4 py-2 rounded-md"
                        : "text-white hover:text-black-600 dark:hover:text-black-300 hover:bg-blue-100 dark:hover:bg-blue-800/30"
                    }`}
                >
                  {name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300
                    ${
                      location.pathname === path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
