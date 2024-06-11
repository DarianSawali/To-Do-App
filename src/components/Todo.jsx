import React from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItem from './TodoItem'

const Todo = () => {
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[34.3rem] rounded-xl'>
      
        {/* --Title-- */}

        <div className='flex items-center mt-7 gap-2'>
            <img src={todo_icon} alt="to-do icon" className='w-8'/>
            <h1 className='text-3xl font-semibold'>To-Do List</h1>
        </div>

        {/* --Input-- */}
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add Task' />
            <button className='border-none rounded-full bg-orange-600 w-32 h-14 text-white font-medium cursor-pointer text-lg'>Add +</button>
        </div>

        {/* --To-do-- */}
        <div>
            <TodoItem/>
        </div>

    </div>
  )
}

export default Todo
