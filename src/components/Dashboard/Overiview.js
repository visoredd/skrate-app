import React from "react";

function Overiview({ dashboard_stats }) {
  return (
    <div>
      <div className="text-lg mb-2 font-semibold"> Overview </div>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-4">
        <div className="bg-slate-100 p-4 rounded flex items-center justify-between">
          <div className="font-semibold w-1/2">Profile Views</div>
          <div className="font-semibold text-4xl text-blue-400">
            {dashboard_stats.profile_views}
          </div>
        </div>
        <div className="bg-slate-100 p-4 rounded flex items-center justify-between">
          <div className="font-semibold w-1/2">Mentorship Sessions</div>
          <div className="font-semibold text-4xl text-blue-400">
            {dashboard_stats.mentorship_sessions}
          </div>
        </div>
        <div className="bg-slate-100 p-4 rounded flex items-center justify-between">
          <div className="font-semibold w-1/2">Jobs Applied</div>
          <div className="font-semibold text-4xl text-blue-400">
            {dashboard_stats.jobs_applied}
          </div>
        </div>
        <div className="bg-slate-100 p-4 rounded flex items-center justify-between">
          <div className="font-semibold w-1/2">Skills Verified</div>
          <div className="font-semibold text-4xl text-blue-400">
            {dashboard_stats.skills_verified}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overiview;
