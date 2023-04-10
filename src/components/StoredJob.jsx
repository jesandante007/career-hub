import React from "react";
import lIcon from "../assets/Icons/Frame-4.png";
import dIcon from "../assets/Icons/Frame.png";
import { Link } from "react-router-dom";

const StoredJob = ({ job }) => {
  const {
    companyName,
    jobTitle,
    workFrom,
    location,
    workTime,
    salary,
    companyLogo,
    id,
  } = job;
  return (
    <section className="container mx-auto mb-6">
      <div className="border rounded-lg p-7 flex items-center">
        <div className="bg-gray-100 w-[240px] h-[240px] rounded-lg flex items-center justify-center mr-6">
          <img className="h-12" src={companyLogo} alt="logo" />
        </div>
        <div>
          <p className="text-gray-700 text-2xl font-semibold">{jobTitle}</p>
          <p className="text-gray-500 text-xl my-3">{companyName}</p>
          <div className="flex gap-4">
            <p className="p-2 px-4 font-semibold border border-violet-500 text-violet-500 rounded">
              {workFrom}
            </p>
            <p className="p-2 px-4 font-semibold border border-violet-500 text-violet-500 rounded">
              {workTime}
            </p>
          </div>
          <div className="flex gap-5 text-gray-500 font-medium mt-4 mb-6">
            <div className="flex items-center gap-1">
              <img className="h-4" src={lIcon} alt="" />
              <p>{location}</p>
            </div>
            <div className="flex items-center gap-1">
              <img className="h-4" src={dIcon} alt="" />
              <p>Salary: {salary}</p>
            </div>
          </div>
        </div>
        <div className="ms-auto">
          <Link to = {`/job/${id}`}>
            <button className="btn-primary">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StoredJob;
