import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { setLocalStorage } from "../../utils/LocalStorage";
import {AuthContext} from '../../context/AuthProvider'
const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskAssignTo, setTaskAssignTo] = useState("");
  const [task, setTask] = useState({});
  const [flag, setFlag] = useState(false)

  const [userData,setUserData,userDataChanged,setUserDataChanged]=useContext(AuthContext)

  // useEffect(()=>{
  //   console.log(userData)
  // },[userData])

  useEffect(() => {

    
    let find=false
    if(flag){
    
    
    let data=userData
    data.employees.forEach((e) => {
      if((e.firstName).toLowerCase()===(taskAssignTo.toLowerCase())){
        e.tasks.push(task)
        e.taskCounts.newTask +=1
        find=true
      }
    });
   
    if(!find){
     alert("No Employee exist")
     setTaskAssignTo("");
     return;
    }
    setUserData(data)
    setUserDataChanged(data)
    setTaskTitle("");
    setTaskDesc("");
    setTaskDate("");
    setTaskCategory("");
    setTaskAssignTo("");
    setFlag(false)
    }
  }, [task]);

  const submitHandler = (e) => {
    e.preventDefault();
    setFlag(true);
    setTask({
      active: false,
      category: taskCategory,
      completed: false,
      failed: false,
      newTask: true,
      taskDate: taskDate,
      taskDescription: taskDesc,
      taskTitle: taskTitle,
    });
    
  };
  return (
    <div className=" h-max  bg-[#252424] w-full px-8 py-8 border-2  overflow-auto border-stone-600 overflow-y-auto rounded-sm">
      <h1 className="text-2xl  ">Add Task</h1>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className=" mt-5 h-[70%] w-full flex flex-col lg:flex-row items-center justify-between gap-y-5"
      >
        <div className="section-1 flex flex-col gap-3 w-full lg:w-1/2 h-full">
          <div className="element  flex flex-col gap-1">
            <label className="font-thin text-[15px]">Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              className="border-2 border-emerald-300 outline-none rounded-md py-2 px-3 text-white w-full lg:w-[80%]"
              type="text"
              placeholder="e.g. deploy project"
              required
            />
          </div>

          <div className="element  flex flex-col gap-1">
            <label className="font-thin text-[15px]">Date</label>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              className="border-2 border-emerald-300 outline-none rounded-md py-2 px-4 text-white w-full lg:w-[80%]"
              type="date"
              required
            />
          </div>

          <div className="element w-full flex flex-col gap-1">
            <label className="font-thin text-[15px]">Assign to</label>
            <input
              value={taskAssignTo}
              onChange={(e) => {
                setTaskAssignTo(e.target.value);
              }}
              className="border-2 border-emerald-300 outline-none rounded-md py-2 px-4 text-white w-full lg:w-[80%]"
              type="text"
              placeholder="e.g. employee name"
              required
            />
          </div>

          <div className="element w-full flex flex-col gap-1">
            <label className="font-thin text-[15px]">Category</label>
            <input
              value={taskCategory}
              onChange={(e) => {
                setTaskCategory(e.target.value);
              }}
              className="border-2 border-emerald-300 outline-none rounded-md py-2 px-4 text-white w-full lg:w-[80%]"
              type="text"
              placeholder="e.g. Design,dev,etc"
              required
            />
          </div>
        </div>

        <div className="section-2 flex flex-col gap-3 w-full lg:w-1/2">
          <div className="element w-full flex flex-col gap-1">
            <label className="font-thin text-[15px]">Task Description</label>
            <textarea
              value={taskDesc}
              onChange={(e) => {
                setTaskDesc(e.target.value);
              }}
              className="border-2 resize-none text-xl p-3 border-emerald-300 outline-none rounded-sm"
              cols="20"
              rows="7"
              placeholder="Description goes here"
              required
            ></textarea>
          </div>
          <button className="py-2 px-4 w-full bg-emerald-700 text-white outline-none border-none rounded-sm active:scale-95 active:bg-emerald-900 cursor-pointer ">
            Create task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
