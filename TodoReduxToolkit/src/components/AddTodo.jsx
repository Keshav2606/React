import React, { useState } from 'react';

import { addTodo } from '../features/todo/todoSlice';
import {useDispatch} from 'react-redux';

function AddTodo(){

    const [todoMsg, setTodoMsg] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();

        dispatch(addTodo(todoMsg))
        setTodoMsg('')
        
    }


    return (
        <form 
        onSubmit={addTodoHandler}
        className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 text-white py-1.5"
            />
            <button type="submit"
            className="rounded-lg rounded-l-none px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default AddTodo;
