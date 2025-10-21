import React from "react";

const AcceptTask = ({data}) => {
 
  return (
    <div className="card flex flex-col justify-between rounded-md w-[300px] shrink-0  p-4 bg-orange-600 h-full">
      <div>
      <div className="header flex justify-between">
        <h1 className="py-1 px-2 bg-red-500 w-fit rounded-sm text-xs">{data.category} </h1>
        <h2 className="text-sm font-semibold ">{data.taskDate}</h2>
      </div>
      <div className="body mt-3">
        <h1 className="text-2xl font-bold">{data.taskTitle}</h1>
        <p className="text-sm mt-2 ms-2">
          {data.taskDescription}
        </p>
      </div>
      </div>
      <div className="status flex flex-col items-center">
        <div className="flex gap-2 mb-3">
          <button className="py-1 px-2 cursor-pointer active:scale-97 bg-stone-800 text-white text-xs rounded-sm">mark as <span style={{color:'lightgreen'}}>completed</span></button>
          <button className="py-1 px-2 cursor-pointer active:scale-97 bg-stone-800 text-white text-xs rounded-sm">marked as <span style={{color:'red'}}>failed</span></button>
        </div>
        <button  className="border-none bg-stone-900 py-1 px-2 rounded-sm">Status - <span style={{color:'skyblue'}}>Active</span></button>
      </div>
    </div>
  );
};

export default AcceptTask;
