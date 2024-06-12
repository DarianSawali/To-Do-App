import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItem from './TodoItem'

const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const inputRef = useRef();
    const add = () => {
        const inputText = inputRef.current.value.trim();

        if(inputText === ""){
            return null;
        }

        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        };

        setTodoList((prev) =>[...prev, newTodo] );
        inputRef.current.value = "";

        // console.log(inputText);
    }

    const deleteTodo = (id)=> {
        setTodoList((prvTodos)=>{
            return prvTodos.filter((todo)=> todo.id !== id);
        });
    }

    const toggle = (id)=> {
        setTodoList((prevTodos)=>{
            return prevTodos.map((todo)=>{
                if(todo.id === id){
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo;
            })
        })
    };

    useEffect(()=>{
        console.log(todoList);
    }, [todoList]);

    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[34.3rem] rounded-xl'>
        
            {/* --Title-- */}

            <div className='flex items-center mt-7 gap-2'>
                <img src={todo_icon} alt="to-do icon" className='w-8'/>
                <h1 className='text-3xl font-semibold'>To-Do List</h1>
            </div>

            {/* --Input-- */}
            <div className='flex items-center my-7 bg-gray-200 rounded-full'>
                <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-800' type="text" placeholder='Add Task' />

                <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white font-medium cursor-pointer text-lg'>Add +</button>
            </div>

            {/* --To-do-- */}
            <div>
                {todoList.map((item, index)=> {
                    return <TodoItem key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
                })}
                
            </div>

        </div>
    )
}

export default Todo
