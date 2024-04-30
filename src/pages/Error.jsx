import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center flex-wrap gap-10 min-h-screen bg-primary-500">
      <div className="flex flex-col justify-start items-center text-right gap-5">
        <h1 className="text-tertiary-500 text-heading1-bold">Error</h1>
        <p className="text-white w-full text-center text-sub-heading2-bold">
          {error.message}
        </p>
        <Link
          to={`/`}
          className="bg-tertiary-500 text-white-500 rounded-lg cursor-pointer flex flex-row justify-center items-center gap-3 p-3 text-white">
          <span>
            <i className="fa-solid fa-home"></i>
          </span>
          <span>Home Page</span>
        </Link>
      </div>
    </div>
  );
};

export default Error;
