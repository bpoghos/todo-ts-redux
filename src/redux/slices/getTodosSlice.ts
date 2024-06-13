import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoInterface } from '../../components/GetTodos/GetTodosInterface'


const getTodos = createAsyncThunk(
  'getTodos/thunk', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos: TodoInterface[] = await res.json()
    return todos
  }
)

interface GetTodosInterface {
  todos: TodoInterface[];
  loading: boolean;
  error: null | boolean
}

const initialState: GetTodosInterface = {
  todos: [],
  loading: false,
  error: null
}

export const getTodosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    // Handle the fulfilled state
    builder.addCase(getTodos.fulfilled, (state: any, action: PayloadAction<TodoInterface[]>) => {
      state.loading = false;
      state.data = action.payload;
    });
    // Handle the rejected state
    builder.addCase(getTodos.rejected, (state: any, action: any) => {
      state.loading = false;
      state.error = action.payload as string;
    })
  }
})


export default getTodosSlice.reducer