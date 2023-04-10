import React from "react";
import { getAppliedJob } from "../utils/fakeDB";
import StoredJob from "./StoredJob";

const AppliedJob = () => {
  const storedJob = getAppliedJob();

  return (
    <div>
      <section className="bg-primary py-32 text-4xl font-semibold mb-32">
        <h2 className="text-center">Applied Jobs</h2>
      </section>
      {storedJob.map((job) => (
        <StoredJob key={job.id} job={job} />
      ))}
    </div>
  );
};

export default AppliedJob;
