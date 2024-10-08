import { createSlice, nanoid } from "@reduxjs/toolkit";

export const initialState = {
    todos: [
        {
            id: nanoid(),
            todoMsg: "Welcome to To-do App",
        },
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                todoMsg: action.payload,
            }
            state.todos.push(todo)
        },
        
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        
    }
})

export const {addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer