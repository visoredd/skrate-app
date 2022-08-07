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
    <div>
      <div className="grid lg:grid-rows-6 grid-rows-10 grid-cols-8 h-screen w-screen">
        <div className="lg:row-span-1 row-span-2 col-span-1 lg:border-r-2 sm:border-b-0 border-b-2 border-slate-100 ">
          <img src={logo} alt="logo" className="sm:w-32 sm:h-24 w-48 h-24" />
        </div>
        <div className="lg:row-span-1 row-span-2 col-span-7 lg:border-b-2 sm:border-b-0 border-b-2 border-slate-100">
          <Header title={data.full_name} />
        </div>
        <div className="lg:row-span-5 row-span-1 lg:col-span-1 col-span-8 lg:border-r-2 lg:border-slate-100 lg:block sm:flex sm:justify-center sm:items-center hidden">
          <div
            className={
              shuffle
                ? "flex gap-1 px-3 lg:py-1 items-center lg:border-l-4 border-b-2 border-white lg:mt-10  lg:border-b-0"
                : "flex gap-1 px-3 lg:py-1 items-center lg:border-l-4 border-b-2 border-blue-500 lg:mt-10  lg:border-b-0"
            }
          >
            <img
              src={Homelogo}
              alt="Home"
              className="hidden lg:block h-4 w-4"
            />
            <div className="cursor-pointer" onClick={() => setShuffle(false)}>
              Home
            </div>
          </div>
          <div
            className={
              shuffle
                ? "flex gap-1 px-3 lg:py-1 items-center lg:border-l-4 border-b-2 border-blue-500 lg:mt-10  lg:border-b-0"
                : "flex gap-1 px-3 lg:py-1 items-centerlg:border-l-4 border-b-2 border-white lg:mt-10  lg:border-b-0"
            }
          >
            <img
              src={Shufflelogo}
              alt="Shuffle"
              className="hidden lg:block h-4 w-4"
            />
            <div className="cursor-pointer" onClick={() => setShuffle(true)}>
              Shuffle
            </div>
          </div>
        </div>

        <div className="row-span-5 lg:col-span-7 col-span-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 h-full w-full p-10 gap-5">
            <div className="flex flex-col gap-5 justify-between">
              <div className=" border-2 border-slate-100 rounded-lg p-4">
                <Overiview
                  dashboard_stats={
                    shuffle
                      ? shuffleObject(data.dashboard_stats)
                      : data.dashboard_stats
                  }
                />
              </div>
              <div className=" border-2 border-slate-100 rounded-lg p-4">
                <UpcomingSessions
                  upcoming_sessions={
                    shuffle
                      ? shuffleArray(data.upcoming_sessions)
                      : data.upcoming_sessions
                  }
                />
              </div>
            </div>
            <div className=" border-2 border-slate-100 rounded-lg">
              <Jobs
                job_postings={
                  shuffle ? shuffleArray(data.job_postings) : data.job_postings
                }
              />
            </div>
          </div>
        </div>
        <div className=" row-span-1 col-span-8 sm:hidden justify-around items-center flex">
          <div
            className={
              shuffle
                ? "flex flex-col gap-1 px-3 lg:py-1 items-center border-t-4 border-white"
                : "flex flex-col gap-1 px-3 lg:py-1 items-center border-t-4 border-blue-500"
            }
          >
            <img src={Homelogo} alt="Home" className=" h-4 w-4" />
            <div className="cursor-pointer" onClick={() => setShuffle(false)}>
              Home
            </div>
          </div>
          <div
            className={
              shuffle
                ? "flex flex-col gap-1 px-3 lg:py-1 items-center border-t-4 border-blue-500"
                : "flex flex-col gap-1 px-3 lg:py-1 items-center border-t-4 border-white"
            }
          >
            <img src={Shufflelogo} alt="Shuffle" className="hiddenh-4 w-4" />
            <div className="cursor-pointer" onClick={() => setShuffle(true)}>
              Shuffle
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
