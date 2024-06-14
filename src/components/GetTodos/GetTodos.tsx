import { useEffect, useState } from "react"
import { TodoInterface } from "./GetTodosInterface"
import { Todo } from "./Todo/Todo"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import { getTodos } from "../../redux/thunks/getTodosThunk"



export const GetTodos = () => {

    const dispatch: AppDispatch = useDispatch()
    const todos = useSelector((state: RootState) => state.todos)



    useEffect(() => {
        dispatch(getTodos())
    }, [])



    return (
        <>
            {
                todos.map((todo: TodoInterface) => {
                    return <Todo key={todo.id} todo={todo} />
                })
            }
        </>
    )
}