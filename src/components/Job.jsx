import React from "react";
import lIcon from "../assets/Icons/Location Icon.png";
import dIcon from "../assets/Icons/Frame.png";

const Job = ({ job }) => {
  const {
    companyName,
    jobTitle,
    workFrom,
    location,
    workTime,
    salary,
    companyLogo,
  } = job;
  return (
    <div className="border rounded-lg p-10">
      <img className="h-10 mb-8" src={companyLogo} alt="companyLogo" />
      <p className="text-gray-700 text-2xl font-semibold">{jobTitle}</p>
      <p className="text-gray-500 text-xl my-3">{companyName}</p>
      <div className="flex gap-4">
        <p className="p-2 px-4 font-semibold border border-purple-400 text-purple-400 rounded">
          {workFrom}
        </p>
        <p className="p-2 px-4 font-semibold border border-purple-400 text-purple-400 rounded">
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
  );
};

export default Job;
