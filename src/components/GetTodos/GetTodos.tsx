import { useEffect, useState } from "react"
import { TodoInterface } from "./GetTodosInterface"
import { Todo } from "./Todo/Todo"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"


export const GetTodos = () => {

    const todos = useSelector((state: RootState) => state.todos.todos)

    

  


    return(
        <>
            {
                todos.map((todo: TodoInterface) => {
                    return <Todo key={todo.id} todo={todo}/>
                })
            }
        </>
    )
}