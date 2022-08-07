import React from "react";

function UpcomingSessions({ upcoming_sessions }) {
  return (
    <div className="flex flex-col p-2">
      <div className="text-lg mb-2 font-semibold"> Upcoming Sessions </div>
      {upcoming_sessions.map((session) => (
        <>
          <div className="grid items-center justify-evenly grid-cols-12 mt-2 mb-4 ml-4 gap-2 font-semibold">
            <div className="col-span-1">
              <img
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
                alt="profile"
                className="h-7 w-7 rounded-full"
              />
            </div>
            <div className="col-span-2">
              <div>{session.mentor_name}</div>
              <div className="text-xs text-slate-400"> Flutter</div>
            </div>
            <div className="col-span-4 text-center">
              <div>{session.timings}</div>
              <div className="text-xs text-slate-400">{session.date}</div>
            </div>
            <div className="col-span-4">
              <button className="bg-green-200 px-1 py-2 w-full rounded">
                {session.session_type}
              </button>
            </div>
            <div className="col-span-1">
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

export default UpcomingSessions;
