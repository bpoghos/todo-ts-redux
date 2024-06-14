import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoInterface } from '../../components/GetTodos/GetTodosInterface'
import { getTodos } from '../thunks/getTodosThunk';



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
    builder.addCase(getTodos.fulfilled, (state: any, action: PayloadAction<TodoInterface[]>) => {
      state.loading = false;
      state.todos = action.payload;
    });
    builder.addCase(getTodos.rejected, (state: any, action: any) => {
      state.loading = false;
      state.error = action.error.message;
    })
  }
})


export default getTodosSlice.reducer