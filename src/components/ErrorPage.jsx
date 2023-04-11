import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center text-5xl font-semibold space-y-10">
        <p>{status || 404}</p>
        <p>{error?.message}</p>
        <Link to='/' className="block">
          <button className="btn-primary">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
