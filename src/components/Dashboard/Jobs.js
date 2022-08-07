import React from "react";

function Jobs({ job_postings }) {
  return (
    <div className="flex flex-col p-2">
      <div className="text-lg mb-2 font-semibold"> New Jobs</div>
      {job_postings.map((job) => (
        <>
          <div className="flex justify-around sm:grid items-center sm:justify-evenly sm:grid-cols-8 gap-2 mt-4 mb-5 ml-4 font-semibold">
            <div className="sm:col-span-1 sm:block hidden">
              <img
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
                alt="profile"
                className="h-7 w-7 rounded-full"
              />
            </div>
            <div className="sm:col-span-3">
              <div>{job.role}</div>
              <div className="text-xs text-slate-400">
                {job.organization_name}
              </div>
              <div className="text-xs text-slate-400">{job.location}</div>
            </div>
            <div className="sm:col-span-3">
              <div>{job.date_posted}</div>
            </div>
            <div className="sm:col-span-1">
              <svg
                width="31"
                height="13"
                viewBox="0 0 31 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.0188 4.62499H2.375C1.34375 4.62499 0.5 5.46874 0.5 6.49999C0.5 7.53124 1.34375 8.37499 2.375 8.37499H23.0188V11.7312C23.0188 12.575 24.0313 12.9875 24.6125 12.3875L29.825 7.15624C30.1812 6.78124 30.1812 6.19999 29.825 5.82499L24.6125 0.593737C24.0313 -0.00626332 23.0188 0.424986 23.0188 1.24999V4.62499Z"
                  fill="#323232"
                />
              </svg>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Jobs;
