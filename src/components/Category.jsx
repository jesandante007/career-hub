import React from "react";

const Category = ({ category }) => {
  const { name, jobs_available, logo } = category;
  return (
    <div className="bg-primary rounded-lg p-10">
      <img className="rounded-lg bg-[#efecff] p-4" src={logo} alt="logo" />
      <p className="text-xl mt-8 mb-2">{name}</p>
      <p className="text-gray-500">{jobs_available}</p>
    </div>
  );
};

export default Category;
