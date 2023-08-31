import AddTodo from "./form/AddTodo";
import TodoList from "./list/TodoList";
import { useState } from "react";

function App() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  return (
    <main className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
      <section className="w-80 min-h-80 p-4 md:w-1/2 md:h-1/2 bg-white shadow rounded">
        <AddTodo data={data} setData={setData} />
        <TodoList data={data} setData={setData} />
      </section>
    </main>
  );
}

export default App;
