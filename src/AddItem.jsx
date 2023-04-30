const AddItem = ({ task, onTyping, submitTask }) => {
  

  return (
    <form className='bg-slate-700 p-5 mx-auto mb-4 rounded shadow-lg w-3/4 md:w-1/2 flex justify-center items-center' onSubmit={submitTask}>
      <input
        className='rounded bg-transparent text-slate-50 text-center border-slate-500 border-2 focus:outline-none placeholder:text-center h-8'
        type='text'
        id='add-item'
        required
        placeholder='Add Task'
        value={task}
        onChange={onTyping}
      />
      <input
        className='rounded bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-50 font-bold w-8 h-8 m-2 cursor-pointer hover:-translate-y-1 hover:shadow hover:shadow-slate-400 transition-all duration-300'
        type='submit'
        value={'+'}
      />
    </form>
  );
};

export default AddItem;
