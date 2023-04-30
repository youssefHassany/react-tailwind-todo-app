import React from 'react'
import RemainingTasks from './RemainingTasks'

const ShowTasks = ({ todo, deleteTask, checkTask }) => {


  return (
    <section className='bg-slate-700 w-3/4 md:w-1/2 mx-auto p-2 rounded bg-opacity-70'>
      <ul>
        {todo ? todo.map((task) => (
          task.checked === false ?
            <li className='bg-slate-500 rounded w-5/6 mx-auto my-4 p-4 flex justify-between shadow-lg' key={task.id}>
                <p className='text-slate-300 font-bold text-xl'>{task.task}</p>
                <div>
                    <button className='inline-block mx-1 p-1 bg-slate-800 rounded text-slate-400 hover:opacity-80 transition-all duration-300'>Done</button>
                    <button className='inline-block mx-1 p-1 bg-red-900 w-8 h-8 text-center text-slate-400 rounded hover:opacity-80 transition-all duration-300' onClick={() => deleteTask(task.id)}>X</button>
                </div>
            </li> : 
            <li className='bg-slate-500 rounded w-5/6 mx-auto my-4 p-4 flex justify-between shadow-lg line-through' key={task.id}>
                <p className='text-slate-300 font-bold text-xl'>{task.task}</p>
                <div>
                    <button className='inline-block mx-1 p-1 bg-slate-800 rounded text-slate-400 hover:opacity-80 transition-all duration-300' onClick={() => checkTask(task.id)}>Done</button>
                    <button className='inline-block mx-1 p-1 bg-red-900 w-8 h-8 text-center text-slate-400 rounded hover:opacity-80 transition-all duration-300' onClick={() => deleteTask(task.id)}>X</button>
                </div>
            </li>
        )
        ) : ''}
      </ul>

      <RemainingTasks todo={todo} />
    </section>
    
  )
}

export default ShowTasks