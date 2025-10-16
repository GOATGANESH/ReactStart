import React, { useState } from "react";
import NoteForm from "./assets/components/NoteForm";
import Title from "./assets/components/Title";
import RecentNotes from "./assets/components/RecentNotes";
const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [taskArr, setTaskArr] = useState([]);

  function deleteNoteHandler(idx){
      let copyTask=[...taskArr];
      copyTask.splice(idx,1);
      setTaskArr(copyTask)
  }

  function childDataHandler(data) {
    // setTitle(data.noteTitle);
    // setDesc(data.noteDesc);

    // let newArr = [...taskArr];
    // newArr.push({ title, desc });
    // setTaskArr(newArr);
      setTaskArr((prev) => [...prev, { noteTitle: data.noteTitle, noteDesc: data.noteDesc }]);
  }

  return (
    <div className="h-screen w-full bg-black text-white p-9 overflow-y-auto">
      <Title />
      <div className="w-full h-[80vh] flex flex-col lg:flex-row ">
        <NoteForm onSendData={childDataHandler} />
        {/* <RecentNotes totalNotes={taskArr} /> */}
        <div className="lg:w-1/2 w-full mt-5  p-4 overflow-y-auto lg:border-l-2">
          <h1 className="text-4xl p-2 mb-3 ">Recent Notes</h1>
          <div className="flex justify-start   flex-wrap gap-8  mb-4">
            {taskArr.map((e, idx) => {
              return (
                
                <div
                  key={idx}
                  className="w-50 h-60   bg-no-repeat bg-size-[auto_700px]  bg-center bg-[url('https://img.lovepik.com/free-png/20210923/lovepik-simple-note-paper-png-image_401193838_wh1200.png')] text-black border-black border-2 rounded-[10px] p-2 flex flex-col justify-between"
                >
                  <div>
                   <h1 className="text-black relative text-[25px] text-start">{e.noteTitle}</h1>
                  <p className="text-black p-2 mt-1   border-t-2 h-full">{e.noteDesc}</p> 
                  </div>
                  <button className="py-1 px-3 w-fit text-xs cursor-pointer bg-red-500 text-white rounded" onClick={(idx)=>{deleteNoteHandler(idx)}}>Delete</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
