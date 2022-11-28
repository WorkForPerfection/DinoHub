import React, {useState} from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export const Login = (props) => {
   const [username, setName] = useState('');
   const [password, setPassword] = useState('');

   const handleClick = (input) => {
	input.preventDefault();
	console.log(username);
	} 
   return ( 
   <div className = "loginpage">
	<Form className = "login-page" onSubmit = {handleClick}>
	  <Form.Label htmlFor = "username">Username</Form.Label>
	  <Form.Control value = {username} onChange= {(input) => setName(input.target.value)} type = "username" placeholder = "     " id = "username" name = "username" />
	  <Form.Label htmlFor = "password">Password</Form.Label>
          <Form.Control value = {password} onChange= {(input) => setPassword(input.target.value)} type = "Password" placeholder = "     " id = "password" name = "paswsord" />
	  <Button type = "Enter">Log In</Button>
	</Form>
	<Button onClick = {() => props.switchPage('sign up')}>You don't have an account? Signup first.</Button>
   </div>
   )
}
