import React, { useState } from "react";
import { getAppliedJob } from "../utils/fakeDB";
import StoredJob from "./StoredJob";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const AppliedJob = () => {
  const storedJob = getAppliedJob();
  const [appliedJobs, setAppliedJobs] = useState(storedJob);

  const handleFilterRemote = () => {
    const remote = storedJob.filter(job => job.workFrom == 'remote')
    setAppliedJobs(remote);
  }
  const handleFilterOnsite = () => {
    const onsite = storedJob.filter(job => job.workFrom == 'Onsite')
    setAppliedJobs(onsite);
  }

  return (
    <div>
      <section className="bg-primary py-32 text-4xl font-semibold mb-32">
        <h2 className="text-center">Applied Jobs</h2>
      </section>
      <div className="container mx-auto text-end mb-6">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-xl font-medium text-gray-900 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                Filter By &darr;
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleFilterRemote}
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        remote
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleFilterOnsite}
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        onsite
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
      </div>
      {appliedJobs.map((job) => (
        <StoredJob key={job.id} job={job} setAppliedJobs={setAppliedJobs} />
      ))}
    </div>
  );
};

export default AppliedJob;
