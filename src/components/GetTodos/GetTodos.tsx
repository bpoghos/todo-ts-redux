import { useEffect, useState } from "react"
import { TodoInterface } from "./GetTodosInterface"


export const GetTodos = () => {

    const [todos, setTodos] = useState<TodoInterface[]>([])

    const getPost = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/todos`)
        const res = await data.json()
        setTodos(res)
        
    }

    useEffect(() => {
        getPost()
    },[])


    return(
        <>
            {
                todos.map((todo: TodoInterface) => {
                    return <div key={todo.id}>{todo.title}</div>
                })
            }
        </>
    )
}