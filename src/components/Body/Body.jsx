import { useState } from "react";
import Button from "../Button/Button"
import styles from "./body.module.css"
import { MdOutlineMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Body =()=>{
    const [name,setName]=useState("")
    const[email,setEmail]=useState("")
    const [address,setAddress]=useState("")

const submitForm=(e)=>{
e.preventDefault()
setName(e.target.elements.name.value)
setEmail(e.target.elements.email.value)
setAddress(e.target.elements.address.value)
}

    return(
        <div className={styles.body}>
           <h1>CONTACT US</h1>
           <p className={styles.para}>LET'S CONNECT:WE'RE HERE TO HELP,AND WE'D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT,OR JUST WANT TO CHAT, YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL OR SOCIAL MEDIA.</p>
           <div className={styles.hero_sec}>
<form action="" onSubmit={submitForm}>
    <div className={styles.btndiv}>
<Button message="VIA SUPPORT CHAT"  onClick={()=>{
    alert("You're about to start a chat with our support team. Do you want to proceed?")
}} icon={<MdOutlineMessage />}/>
<Button message="VIA CALL" onClick={()=>{
    alert("Do you want to proceed with the call request? Click OK to confirm.")
}} icon={<FaPhone />}  />
</div>
<div>
<Button  message="VIA EMAIL FORM" emailBtn={true}  onClick={()=>{
    alert("Are you sure you want to send an email? Click OK to proceed.")
}} 
icon={<MdOutlineMessage />}/>
</div>
<label htmlFor="name" ></label>Name:
<br />
<input type="text"  id="name" name="name" title="name" maxLength={30}  />
<br />
<label htmlFor="email"></label>Email:
<br />
<input type="email" id="email" name="email" title="email" maxLength={30} />
<br />
<label htmlFor="texts"></label>Text:
<br />
<textarea  message="address" id="textArea" maxLength={40} title="address" ></textarea>
<br />
<Button message="SUBMIT" type="submit" style={{marginLeft:"90px"}} />
<div className={styles.output}>
<p > <b>Name:</b>{name}</p>
<p > <b>Email:</b>{email}</p>
<p > <b>Address:</b>{address}</p>
</div>
</form>
<div className={styles.right}>
<img className={styles.pic} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UFcU9OE0YS--JJfQqY0TULW7fynRya1Jqg&s" alt="pic" />
</div>
           </div>
           </div>
    )
}

export default Body;