import styles from './AddPost.module.css'

export const AddPost = () => {
    return (
        <>
            <input className={styles.inputName} type="text" placeholder="Todo Name" />
            <button className={styles.addButton}>Add</button>
        </>
    )
}