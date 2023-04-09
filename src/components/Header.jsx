import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";

const Header = () => {
  return (
    <div className="bg-primary">
      <header className="container mx-auto flex justify-between items-center py-5">
        <Link to="/" className="text-4xl font-bold">
          Job Hunter
        </Link>
        <nav className="flex gap-8 text-gray-500">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/statistics">Statistics</ActiveLink>
          <ActiveLink to="/applied">Applied Jobs</ActiveLink>
          <ActiveLink to="/blog">Blog</ActiveLink>
        </nav>
        <button className="btn-primary">Start Applying</button>
      </header>
    </div>
  );
};

export default Header;
