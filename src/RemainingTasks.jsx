import React from 'react'

const RemainingTasks = ({todo}) => {
  return (
    <section className='w-full bg-slate-600 p-4 text-center text-3xl font-bold text-slate-200 rounded mx-auto mt-20 shadow-lg'>
        {todo.length ? <h1>You have {todo.length} Tasks</h1> : <h1>No Tasks</h1>}
    </section>
  )
}

export default RemainingTasks