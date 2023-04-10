import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import people from "../assets/All Images/P3OLGJ1 copy 1.png";
import Category from "./Category";
import Job from "./Job";

const Home = () => {
  const jobs = useLoaderData();
  const [seeAll, setSeeAll] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleSeeAll = () => {
    setSeeAll(!seeAll);
  };

  return (
    <div>
      <div className="bg-primary">
        <section className="container mx-auto lg:flex justify-between pt-10 px-2 lg:px-0">
          <div>
            <h1 className="text-7xl font-bold leading-tight">
              One Step <br />
              Closer To Your <br />
              <span className="text-violet-500">Dream Job</span>
            </h1>
            <p className="text-lg text-gray-500 py-7">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <div className="text-center lg:text-start">
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
          <div>
            <img src={people} alt="man" />
          </div>
        </section>
      </div>
      <section className="container mx-auto mt-32 px-2 lg:px-0">
        <h2 className="text-5xl font-bold text-center">Job Category</h2>
        <p className="text-gray-500 text-center mt-4 mb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </section>
      <section className="container mx-auto mt-32 px-2 lg:px-0">
        <h2 className="text-5xl font-bold text-center">Featured Jobs</h2>
        <p className="text-gray-500 text-center mt-4 mb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid lg:grid-cols-2 gap-6">
          {jobs.slice(0, seeAll ? 4 : 6).map((job) => (
            <Job key={job.id} job={job} />
          ))}
        </div>
        <div className="mt-6 text-center">
          {seeAll ? (
            <button onClick={() => handleSeeAll()} className="btn-primary">
              See All Jobs
            </button>
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
