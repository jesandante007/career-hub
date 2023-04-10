import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";

const Header = () => {
  return (
    <div className="bg-primary">
      <header className="container mx-auto lg:flex justify-between items-center py-5">
        <p className="text-center">
        <Link to="/" className="text-4xl font-bold">
          Job Hunter
        </Link>
        </p>
        <nav className="flex justify-center gap-8 text-gray-500 mt-6 lg:mt-0">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/statistics">Statistics</ActiveLink>
          <ActiveLink to="/applied">Applied Jobs</ActiveLink>
          <ActiveLink to="/blog">Blog</ActiveLink>
        </nav>
        <div className="text-center mt-6 lg:mt-0">
          <button className="btn-primary">Start Applying</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
