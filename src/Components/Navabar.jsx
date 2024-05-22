import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  const handleSignOut = () => {
    localStorage.setItem("isAuthenticated", "false");
    setIsAuthenticated(false);
    navigate("/login");
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <div>
      <nav className="bg-black py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="https://resources.sonyliv.com/image/fetch/w_40,c_fill,fl_lossy,f_auto,q_auto:eco,e_contrast:30,e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/sonyliv_new_revised_header_logo.png"
              alt="Sony Liv"
              className="h-8"
            />
          </Link>
          {isAuthenticated ? (
            <button
              onClick={handleSignOut}
              className="text-black bg-gray-300 py-1.5 px-4 rounded-full hover:bg-gray-400 transition"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={handleSignIn}
              className="text-black bg-gray-300 py-1.5 px-4 rounded-full hover:bg-gray-400 transition"
            >
              Sign In
            </button>
          )}
        </div>
      </nav>
      <hr />
    </div>
  );
}
