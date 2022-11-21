import React, {useState} from "react";
export const Login = (props) => {
   const [username, setName] = useState('');
   const [password, setPassword] = useState('');

   const handleClick = (input) => {
	input.preventDefault();
	console.log(username);
	} 
   return ( 
   <div className = "loginpage">
	<form className = "login-page" onSubmit = {handleClick}>
	  <label htmlFor = "username">Username</label>
	  <input value = {username} onChange= {(input) => setName(input.target.value)} type = "username" placeholder = "     " id = "username" name = "username" />
	  <label htmlFor = "password">Password</label>
          <input value = {password} onChange= {(input) => setPassword(input.target.value)} type = "Password" placeholder = "     " id = "password" name = "paswsord" />
	  <button type = "Enter">Log In</button>
	</form>
	<button onClick = {() => props.switchPage('sign up')}>You don't have an account? Signup first.</button>
   </div>
   )
}
