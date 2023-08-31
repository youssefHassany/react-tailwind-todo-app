import React, { useState } from "react";

const AddTodo = ({ data, setData }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataObj = {
      id: Date.now(),
      title: taskTitle,
      done: false,
    };
    const updatedData = [...data, dataObj];
    setData(updatedData);
    localStorage.setItem("todos", JSON.stringify(updatedData));
    setTaskTitle("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-evenly w-full">
      <input
        type="text"
        className=" w-3/5 p-2 font-medium rounded border border-black focus:outline-blue-500"
        placeholder="Enter Task"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button
        className="py-3 px-6 font-medium rounded bg-blue-500 text-white duration-300 hover:bg-cyan-500"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
