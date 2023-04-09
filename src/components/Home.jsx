import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import people from '../assets/All Images/P3OLGJ1 copy 1.png'

const Home = () => {
    const categories = useLoaderData()
  return (
    <div>
      <div className="bg-primary">
        
        <section className="container mx-auto flex justify-between pt-10">
         <div>
         <h1 className="text-7xl font-bold leading-tight">One Step <br />Closer To Your <br /><span className="text-purple-400">Dream Job</span></h1>
         <p className="text-lg text-gray-500 py-7">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
         <button className="btn-primary">Get Started</button>
         </div>
         <div>
            <img src={people} alt="man" />
         </div>
        </section>
      </div>
      <section className="mt-32">
          <h2 className="text-5xl font-bold text-center">Job Category</h2>
          <p className="text-gray-500 text-center mt-4 mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </section>
    </div>
  );
};

export default Home;
