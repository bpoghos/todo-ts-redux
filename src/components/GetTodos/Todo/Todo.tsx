import { TodoInterface } from '../GetTodosInterface'
import { FaTrash, FaPencil } from 'react-icons/fa6'
import styles from './Todo.module.css'

export const Todo = ({ todo }: { todo: TodoInterface }) => {
    return (
        <div className={styles.todoBox}>
            <h5>{todo.id}</h5>
            <p>{todo.title}</p>
            <div>
                <button><FaPencil /></button>
                <button><FaTrash /></button>
            </div>
        </div>
    )
}