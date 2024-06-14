import { createAsyncThunk } from "@reduxjs/toolkit";
import { TodoInterface } from "../../components/GetTodos/GetTodosInterface";

export const getTodos = createAsyncThunk(
    'todos/fetch',
    async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos');
            if (!res.ok) {
                throw new Error('Failed to fetch todos');
            }
            const todos: TodoInterface[] = await res.json();
            console.log(todos);

            return todos;
        } catch (error) {
            console.error('Error fetching todos:', error);
            throw error
        }
    }
);