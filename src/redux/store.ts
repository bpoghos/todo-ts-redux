import { configureStore } from "@reduxjs/toolkit"
import getTodosSlice from "./slices/getTodosSlice"

export const store = configureStore({
    reducer: getTodosSlice
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch