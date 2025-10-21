import React from "react";

const FailedTask = ({data}) => {
  return (
     <div className="card flex flex-col justify-between rounded-md w-[300px] shrink-0  p-4 bg-red-600 h-full">
      <div>
      <div className="header flex justify-between">
        <h1 className="py-1 px-2 bg-red-500 w-fit rounded-sm text-xs">{data.category}</h1>
        <h2 className="text-sm font-semibold ">{data.taskDate}</h2>
      </div>
      <div className="body mt-3">
        <h1 className="text-2xl font-bold">{data.taskTitle}</h1>
        <p className="text-sm mt-2 ms-2">
          {data.taskDescription}
        </p>
      </div>
      </div>
      <div className="status flex justify-center">
        <button className="border-none bg-orange-900 py-1 px-2 rounded-sm">Status - Failed</button>
      </div>
    </div>
  );
};

export default FailedTask;
