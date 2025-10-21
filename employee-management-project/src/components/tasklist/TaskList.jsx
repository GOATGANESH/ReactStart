import React from "react";
import { useEffect } from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({data}) => {
 useEffect(() => {
    const container = document.querySelector(".container");
    const onWheel = (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };
    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="flex flex-col w-full h-[66%] py-4 px-4 lg:px-16  ">
      <h1 className="text-4xl w-full ">Tasks</h1>
      <div className="container py-3 overflow-x-auto flex gap-3 h-full w-full mt-3">
          {data.tasks.map((task,index)=>{
            
            if(task.active){
              return <AcceptTask data={task} key={`active-${index}`}/>
            }
             if(task.newTask){
               return <NewTask data={task} key={`new-${index}`}/>
            }
             if(task.completed){
               return <CompleteTask data={task} key={`completed-${index}`}/>
            }
             if(task.failed){
               return <FailedTask data={task} key={`failed-${index}`}/>
            }
            else{
             return <h1>No Tasks Available</h1>
            }
          })}
          
      </div>
    </div>
  );
};

export default TaskList;
