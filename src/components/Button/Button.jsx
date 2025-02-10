import styles from "./button.module.css"

const Button =({name})=>{
    return(
        <button className={styles.btn}>
            {name}
        </button>
    )
}
export default Button