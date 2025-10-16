import { useState } from "react";

const NoteForm = ({ onSendData }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div className="lg:w-1/2 w-full lg:p-9 h-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSendData({ noteTitle: title, noteDesc: desc });
          setTitle("");
          setDesc("");
        }}
        className="flex w-full  flex-col gap-8 items-start"
      >
        <input
          type="text"
          name=""
          id=""
          className="py-4 px-3 w-full text-2xl font-medium border-2 rounded-[8px] outline-none border-white"
          placeholder="Enter title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          name=""
          id=""
          value={desc}
          className="py-4 w-full px-3 max-h-[300px] h-40  outline-none text-2xl border-2 border-white rounded"
          placeholder="Enter description"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        ></textarea>

        <button
          className="py-2 px-5 w-30 text-xl rounded-full border-2 border-black bg-white text-black cursor-pointer"
        >
          Add
        </button>
      </form>
    </div>
  );
};
export default NoteForm;
