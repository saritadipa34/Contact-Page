import styles from "./button.module.css"

const Button =({message,emailBtn,icon,onClick,style})=>{
    return(
        <button onClick={onClick}  style={style} className={emailBtn ? styles.emailBtn : styles.btn}>
           {icon} {message}  
        </button>
    )
}
export default Button