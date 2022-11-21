import React, {useState} from "react";
export const Signup = (props) => {
   const [username, setName] = useState('');
   const [password, setPassword] = useState('');
   const [email, setEmail] = useState('');
   const handleClick = (input) => {
        input.preventDefault();
        console.log(username);
        }
   return (
   <div className = "loginpage">
        <form onSubmit = {handleClick}>
	  <label htmlFor = "email">Email</label>
	  <input value = {email} placeholder = "     " id = "username" name = "username" />
          <label htmlFor = "username">Username</label>
          <input value = {username} onChange= {(input) => setName(input.target.value)} type = "username" placeholder = "     " id = "username" name = "username" />
          <label htmlFor = "password">Password</label>
          <input value = {password} onChange= {(input) => setPassword(input.target.value)} type = "Password" placeholder = "     " id = "password" name = "paswsord" />
          <button type = "Enter">Sign Up</button>
        </form>
        <button onClick = {() => props.switchPage('log in')}>You already have an account. Login.</button>
   </div>
 )
}
