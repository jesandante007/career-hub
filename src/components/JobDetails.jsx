import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import dIcon from "../assets/Icons/Frame.png";
import jIcon from "../assets/Icons/Frame-1.png";
import pIcon from "../assets/Icons/Frame-2.png";
import eIcon from "../assets/Icons/Frame-3.png";
import lIcon from "../assets/Icons/Frame-4.png";

const JobDetails = () => {
  const { id } = useParams();
  const jobs = useLoaderData();
  const job = jobs.find((job) => job.id == id);

  const {
    jobTitle,
    location,
    salary,
    jobDescription,
    educationalRequirements,
    jobResponsibility,
    experiences,
    contactInformation,
  } = job;

  return (
    <>
      <section className="bg-primary py-32 text-4xl font-semibold ">
        <h2 className="text-center">Job Details</h2>
      </section>
      <section className="container mx-auto mt-32 grid grid-cols-[2fr_1fr]">
        <div>
          <p className="text-gray-500 mb-6">
            <span className="text-gray-900 font-semibold">
              Job Description:{" "}
            </span>
            {jobDescription}
          </p>
          <p className="text-gray-500 mb-6">
            <span className="text-gray-900 font-semibold">
              Job Responsibility:{" "}
            </span>
            {jobResponsibility}
          </p>
          <p className="text-gray-500 mb-6">
            <span className="text-gray-900 font-semibold">
              Educational Requirements:{" "}
            </span>
            <br />
            {educationalRequirements}
          </p>
          <p className="text-gray-500 mb-6">
            <span className="text-gray-900 font-semibold">Experiences: </span>
            <br />
            {experiences}
          </p>
        </div>
        <div>
          <div className="bg-primary rounded p-8">
            <p className="text-xl font-semibold mb-6">Job Details</p>
            <hr className="mb-6" />
            <div className="flex items-center gap-2 mb-4">
              <img className="h-4" src={dIcon} alt="" />
              <p className="text-gray-500">
                <span className="text-gray-900 font-semibold">Salary: </span>
                {salary} (Per Month)
              </p>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <img className="h-4" src={jIcon} alt="" />
              <p className="text-gray-500">
                <span className="text-gray-900 font-semibold">Job Title: </span>
                {jobTitle}
              </p>
            </div>
            <p className="text-xl font-semibold mb-6">Contact Information</p>
            <hr className="mb-6" />
            <div className="flex items-center gap-2 mb-4">
              <img className="h-4" src={pIcon} alt="" />
              <p className="text-gray-500">
                <span className="text-gray-900 font-semibold">Phone: </span>
                {contactInformation.phone}
              </p>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <img className="h-4" src={eIcon} alt="" />
              <p className="text-gray-500">
                <span className="text-gray-900 font-semibold">Email: </span>
                {contactInformation.email}
              </p>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <img className="h-4" src={lIcon} alt="" />
              <p className="text-gray-500">
                <span className="text-gray-900 font-semibold">Address: </span>
                {location}
              </p>
            </div>
          </div>
          <button className="btn-primary mt-6 w-full">Apply Now</button>
        </div>
      </section>
    </>
  );
};

export default JobDetails;
