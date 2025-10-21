import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTaskContainer = () => {
  const [userData,setUserData] = useContext(AuthContext);
  

  return (
    <div className=" w-full h-full border-2 border-emerald-300 lg:p-3  flex flex-col gap-2 rounded-sm ">
      
      <div className=" flex flex-col gap-2  vert-container overflow-auto ">
         <div className="task w-[93vh] lg:w-[92.5vw]  flex justify-between bg-stone-700 text-xs lg:text-sm gap-2 lg:gap-0 py-2 lg:p-3 rounded-md">
              <h1 className="w-1/5 ps-1">Employee</h1>
              <h1 className="w-1/5">New Task</h1>
              <h1 className="w-1/5">Active Task</h1>
              <h1 className="w-1/5">Completed</h1>
              <h1 className="w-1/5">Failed</h1>
              <h1 className="w-1/5">Visit </h1>
        </div>
        {
        userData.employees.map((e, idx) => {
          return (
            <div
              key={idx}
              className="task w-[93vh] lg:w-[92.5vw]   flex items-center  justify-between bg-transperent border-2 border-emerald-600 py-2 lg:py-3 rounded-md">
              <h1 className="w-1/5 ps-2 text-xs lg:text-md font-thin">{e.firstName}</h1>
              <h1 className="w-1/5 ps-2 text-xs lg:text-md font-thin">{e.taskCounts.newTask}</h1>
              <h1 className="w-1/5 ps-2 text-xs lg:text-md font-thin">{e.taskCounts.active}</h1>
              <h1 className="w-1/5 ps-2 text-xs lg:text-md font-thin">{e.taskCounts.completed}</h1>
              <h1 className="w-1/5 ps-2 text-xs lg:text-md font-thin">{e.taskCounts.failed}</h1>
              <h1 className="w-1/5 ps-2  cursor-pointer text-xs text-white  active:scale-95 active:text-stone-800">View Dashboard</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTaskContainer;
