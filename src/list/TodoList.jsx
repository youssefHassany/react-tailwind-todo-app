import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";

const TodoList = ({ data, setData }) => {
  const handleCheckboxChange = (todoId) => {
    const updatedData = data.map((todo) =>
      todo.id === todoId ? { ...todo, done: !todo.done } : todo
    );
    setData(updatedData);
    localStorage.setItem("todos", JSON.stringify(updatedData));
  };

  const deleteTodo = (id) => {
    const updatedData = data.filter((todo) => todo.id !== id);
    setData(updatedData);
    localStorage.setItem("todos", JSON.stringify(updatedData));
  };

  return (
    <ul className="mt-8 h-3/4 overflow-y-scroll">
      {data.length > 0 ? (
        data.map((todo) => (
          <li
            className={`p-2 mb-2 rounded w-full flex justify-between items-center ${
              todo.done
                ? "bg-blue-500 bg-opacity-20"
                : "bg-blue-500 bg-opacity-40"
            }`}
            key={todo.id}
          >
            <div>
              <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.done}
                onChange={() => handleCheckboxChange(todo.id)}
              />
              <p
                className={`text-xl ml-2 inline-block ${
                  todo.done ? "line-through" : ""
                }`}
              >
                {todo.title}
              </p>
            </div>
            <button
              className="p-2 bg-white shadow rounded text-red-500 duration-200 hover:bg-opacity-50"
              onClick={() => deleteTodo(todo.id)}
            >
              <FaTrashAlt />
            </button>
          </li>
        ))
      ) : (
        <p className="font-bold text-center text-3xl p-8">No Todos Yet...</p>
      )}
    </ul>
  );
};

export default TodoList;
