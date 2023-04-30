import "./App.css";
import AddItem from "./AddItem";
import { useState } from "react";
import ShowTasks from "./ShowTasks";

function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  ); // array of todos = local storage if it exist

  const onTyping = (e) => {
    setTask(e.target.value);
  };

  const submitTask = (e) => {
    e.preventDefault();
    console.log(task);
    setTask(""); // to erase input field
    addTodo(task); // calling the function to add task to array
  };

  const deleteTask = (id) => {
    const remainingTasks = todo.filter((task) => task.id !== id);
    saveToStorage(remainingTasks);
  };

  const checkTask = (id) => {
    const updatedTodo = todo.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTodo(updatedTodo);
    console.log(updatedTodo);
  };

  // function to store todos
  const addTodo = (task) => {
    const todoList = [
      ...todo,
      { id: todo.length + 1, checked: false, task: task },
    ]; // this is the array we're going to use
    console.log(todoList);
    saveToStorage(todoList); // save to local storage
  };

  // function to store to local storage
  const saveToStorage = (todoList) => {
    setTodo(todoList);
    localStorage.setItem("todos", JSON.stringify(todoList));
  };

  return (
    <div className="App w-full h-screen bg-slate-800">
      <AddItem task={task} onTyping={onTyping} submitTask={submitTask} />
      <ShowTasks todo={todo} deleteTask={deleteTask} checkTask={checkTask} />
    </div>
  );
}

export default App;
