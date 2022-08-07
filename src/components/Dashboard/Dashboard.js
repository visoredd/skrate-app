import React, { useState, useEffect } from "react";
import logo from "../../Skrate-logo.png";
import Homelogo from "../../Home.png";
import Shufflelogo from "../../Shuffle.png";
import UpcomingSessions from "./UpcomingSessions";
import Overiview from "./Overiview";
import Header from "./Header";
import Jobs from "./Jobs";
import axios from "axios";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [shuffle, setShuffle] = useState(false);
  const shuffleArray = (arr) => {
    return arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };
  const shuffleObject = (obj) => {
    let arr = shuffleArray(Object.values(obj));
    let i = 0;
    return Object.keys(obj).reduce((acc, key) => {
      acc[key] = arr[i];
      i++;
      return acc;
    }, {});
  };
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818")
        .then((res) => {
          console.log(res.data);
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  if (loading) return <>Loading...</>;

  return (
    <div className="grid grid-rows-6 grid-cols-8 grid-flow-col h-screen w-screen">
      <div className="row-span-6 col-span-1 border-r-2 border-slate-100">
        <img src={logo} alt="logo" className="w-32 h-24" />
        <div
          className={
            shuffle
              ? "flex gap-3 px-3 py-1 items-center border-l-4 border-white mt-10"
              : "flex gap-3 px-3 py-1 items-center border-l-4 border-blue-500 mt-10"
          }
        >
          <img src={Homelogo} alt="Home" className="h-4 w-4" />
          <div className="cursor-pointer" onClick={() => setShuffle(false)}>
            Home
          </div>
        </div>
        <div
          className={
            shuffle
              ? "flex gap-3 px-3 py-1 items-center border-l-4 border-blue-500 mt-10"
              : "flex gap-3 px-3 py-1 items-center border-l-4 border-white mt-10"
          }
        >
          <img src={Shufflelogo} alt="Shuffle" className="h-4 w-4" />
          <div className="cursor-pointer" onClick={() => setShuffle(true)}>
            Shuffle
          </div>
        </div>
      </div>
      <div className="row-span-1 col-span-7 border-b-2 border-slate-100">
        <Header title={data.full_name} />
      </div>
      <div className="row-span-5 col-span-7">
        <div className="grid grid-rows-2 grid-cols-2 h-full w-full p-10 gap-5">
          <div className="row-span-1 col-span-1 border-2 border-slate-100 rounded-lg p-2">
            <Overiview
              dashboard_stats={
                shuffle
                  ? shuffleObject(data.dashboard_stats)
                  : data.dashboard_stats
              }
            />
          </div>
          <div className="row-span-2 col-span-1 border-2 border-slate-100 rounded-lg">
            <Jobs
              job_postings={
                shuffle ? shuffleArray(data.job_postings) : data.job_postings
              }
            />
          </div>
          <div className="row-span-1 col-span-1 border-2 border-slate-100 rounded-lg">
            <UpcomingSessions
              upcoming_sessions={
                shuffle
                  ? shuffleArray(data.upcoming_sessions)
                  : data.upcoming_sessions
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
