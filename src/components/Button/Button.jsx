import styles from "./button.module.css"

const Button =({name,emailBtn,icon})=>{
    return(
        <button className={emailBtn ? styles.emailBtn : styles.btn}>
           {icon} {name}
        </button>
    )
}
export default Button