import Button from "../Button/Button"
import styles from "./body.module.css"

const Body =()=>{
    return(
        <div className={styles.body}>
           <h1>CONTACT US</h1>
           <p>LET'S CONNECT:WE'RE HERE TO HELP,AND WE'D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT,OR JUST WANT TO CHAT, YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL OR SOCIAL MEDIA.</p>
           <div className={styles.hero_sec}>
<form action="">
    <div className={styles.btndiv}>
<Button />
<Button />

</div>
<div>
<Button />
</div>
<label htmlFor="name"></label>Name:
<input type="text"  id="name"/>
<label htmlFor="email"></label>Email:
<input type="email" id="email" />
<label htmlFor="texts"></label>Text:
<textarea  id="texts"></textarea>
<Button />
</form>
<div className={styles.right}>
<img className={styles.pic} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UFcU9OE0YS--JJfQqY0TULW7fynRya1Jqg&s" alt="pic" />
</div>
           </div>
           </div>
    )
}

export default Body;