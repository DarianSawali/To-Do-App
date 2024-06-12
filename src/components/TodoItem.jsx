import React from 'react'
import tick from '../assets/tick.png'
// import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'


const TodoItem = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img className='w-7' src={tick} alt="tick" />
            <p className='tex-slate-700 ml-4 text-[1rem]' >
                {text}</p>
        </div>

        <img onClick={()=>{deleteTodo(id)}} src={delete_icon} alt="delete icon" className='w-3.5 cursor-pointer'/>

    </div>
  )
}

export default TodoItem
