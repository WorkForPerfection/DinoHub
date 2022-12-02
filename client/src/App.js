import './css/App.css';
import './css/Dino.css'
import React, { useEffect, useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { BuildYourOwn } from "./BuildYourOwn.js"
import { DinoEgg } from "./DinoEgg"
import { DailyRecommendation } from "./DailyRecommendation.js"
import { Home } from "./Home"
import { DinoPage } from "./DinoPage"
import { Explore } from "./explore"
import './general.module.css'
import styles from "./general.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import Logo from './components/Logo'
import './css/Dino.css'
import { MINT, NAVY, MAROON } from "./css/colors"
import { fontSize } from '@mui/system';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

function App(props) {
    const [DinoName, setDinoName] = useState("");
    const [login, setLogin] = useState(false);           //login=true means we want to render login page
    const [message, setMessage] = useState(0);       //message=1 means we need to pop up "invalid account/password combination" on login screen; message=2 means pop up "username exists!" on login screen
    const [user, setUser] = useState();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [newusername, setnewUsername] = useState("");
    const [newpassword, setnewPassword] = useState("");
    const [editstate,setEditState] = useState({display:false,password:"",first_name:"",last_name:"",message:""});
    const navigate = useNavigate();

    const linkStyle = {
        color: 'white',
        margin: '1rem',
        fontSize: '1.2rem'
    }

    const formStyle = {
        height: '2rem',
        padding: '0 0rem 0 7rem',
        verticalAlign: 'center'
    }

    const buttonStyle = {
        backgroundColor: 'white',
        color: NAVY,
        fontFamily: 'dinopia-r',
        margin: '1rem',
        borderColor: MINT
    }

    const containerStyle = {
        textAlign: 'center',
        verticalAlign: 'center',
        padding: '0rem',
        height: '100%'
    }

    const cardStyle = {
        textAlign: 'center',
        verticalAlign: 'center',
        fontFamily: 'dinopia-l',
        width: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        margin: '0rem auto 2rem auto',
        fontSize: '1.2rem'
    }

    //In your_dino_egg, if the user is not logged in, then we should display "login first"
    const HomeRender = (
        <dev>
            <Navbar style={{ backgroundColor: "#2C466C", boxShadow: '0rem 0.3rem 0.05rem ' + MINT }}>
                <Navbar.Brand className='ms-4'>
                    <Logo size={2} href='/' shadow='0rem 0.3rem 0.05rem #000000' />
                </Navbar.Brand>
                <Nav className='nav' style={{ color: 'white' }}>
                    <Link style={linkStyle} to="/">Home</Link>
                    <Link style={linkStyle} to="/build_your_own_dino">Build Your Own Dino</Link>
                    <Link style={linkStyle} to="/daily_recommendation">Daily Dino</Link>
                    <Link style={linkStyle} to="/your_dino_egg">Your Dino Egg</Link>
                </Nav>
                <Nav style={formStyle} >
                    <Form>
                        <input type="text" onChange={(event) => { setDinoName(event.target.value) }} />
                    </Form>

                </Nav>
                <Nav>
                    <button style={buttonStyle} onClick={() => { navigate("/DinoPage", { state: { curname: DinoName } }) }}> search </button>
                </Nav>
                <Nav>
                    <button style={buttonStyle} onClick={() => { navigate("/discover") }}> discover </button>
                </Nav>
                <Nav>
                    <button style={buttonStyle} onClick={() => { setLogin(true) }}> login </button>
                </Nav>
            </Navbar>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/build_your_own_dino" element={<BuildYourOwn />} />
                <Route path="/daily_recommendation" element={<DailyRecommendation />} />
                <Route path="/your_dino_egg" element={<DinoEgg />} />
                <Route path="/discover" element={<Explore />} />
                <Route path="/DinoPage" element={<DinoPage />} />
            </Routes>
        </dev>
    );

    //----------------------------------------------------------login components-------------------------------------------------
    let logincomponent;
    const handleLogout = () => {
        setUser(undefined);
        setUsername("");
        setPassword("");
        localStorage.clear();
    };
    //if user updates any info in accountpage, make sure to update both mysql record and localstorage
    var accountPage = <dev>null</dev>;
    if (user) {
        // console.log(user);
        accountPage = (
            <Container style={containerStyle}>
                <h1><span style={{fontSize: '4rem', fontFamily:'dino-font', margin: '0.6rem'}}>{user.username}</span>'s DinoHub</h1>
                <Card style={cardStyle}>
                    <Card.Body>
                        <ListGroup>
                            <ListGroupItem>
                                Username: {user.username}
                            </ListGroupItem>
                            <ListGroupItem>
                                First name: {user.first_name}
                            </ListGroupItem>
                            <ListGroupItem>
                                Last name: {user.last_name}
                            </ListGroupItem>
                            <ListGroupItem>
                                profile_picture:{user.profile_picture}
                            </ListGroupItem>
                            <ListGroupItem>
                                <button onClick={()=>{setEditState({...editstate,display:true})}}> edit informaion</button>
                            </ListGroupItem>
                        </ListGroup>
                    </Card.Body>

                    <button style={buttonStyle} onClick={() => {
                        handleLogout()
                    }}> <span style={{ color:'#b23b3b' }}>log out</span>
                    </button>
                </Card>
            </Container>
        )
    }

    const handleLoginSubmit = async e => {
        e.preventDefault();
        // console.log("helloss");
        const user = { username, password };
        // console.log({username,password});
        const response = await axios.post(
            "http://localhost:8080/login",
            user
        );
        // console.log("helloss");
        //if login successful
        if (response.data.length != 0 && response.data[0].username != "") {
            setUser(response.data[0]);
            console.log(user);
            localStorage.setItem('User', JSON.stringify(user));
            setMessage(0);
        }
        else { setMessage(1); }
        // console.log("helloss");
        // console.log(response.data)
    };
    const handleSignUpSubmit = async e => {
        e.preventDefault();
        const user = { newusername, newpassword };
        // console.log(user)
        const response = await axios.post(
            "http://localhost:8080/signup",
            user
        );
        // console.log("signup reached")
        //if sign up successful, user will log in automatically
        // console.log(response.data.length);
        if (response.data[0].username != "") {
            setUser(response.data[0]);
            localStorage.setItem('User', JSON.stringify(response.data[0]));
            setnewUsername("")
            setnewPassword("")
            setMessage(0);
        }
        else { setMessage(2); }
        // console.log(response.data)
    };
    //if user is already logged in, display the corresponding account info component
    if (user) {
        logincomponent = (
            <Container style={containerStyle}>
                <Card style={cardStyle}>
                    <button style={buttonStyle} onClick={() => setLogin(false)}> Back </button>
                    {accountPage}
                </Card>
            </Container>
        );
    }
    //else, display forms to log in/sign up
    else {
        logincomponent = (
            <Container style={containerStyle}>
                <button style={buttonStyle} onClick={() => setLogin(false)}> Back </button>
                <Card style={cardStyle}>
                    <Card.Header>Log in to an existing account:</Card.Header>
                    <Card.Body>
                        <form id={"form1"} onSubmit={handleLoginSubmit}>
                            <label htmlFor="username">Username: </label>
                            <input style={{ margin: '0.3rem' }}
                                type="text"
                                value={username}
                                placeholder="enter a username"
                                onChange={({ target }) => setUsername(target.value)}
                            />
                            <div>
                                <label htmlFor="password">password: </label>
                                <input style={{ margin: '0.3rem' }}
                                    type="password"
                                    value={password}
                                    placeholder="enter a password"
                                    onChange={({ target }) => setPassword(target.value)}
                                />
                            </div>
                            <button style={buttonStyle} type="submit">Login</button>
                        </form>
                    </Card.Body>
                </Card>
                <Card style={cardStyle}>
                    <Card.Header>Sign up for a new account:</Card.Header>
                    <Card.Body>
                        <form id={"form2"} onSubmit={handleSignUpSubmit}>

                            <label htmlFor="username">Username: </label>
                            <input style={{ margin: '0.3rem' }}
                                type="text"
                                value={newusername}
                                placeholder="enter a new username"
                                onChange={({ target }) => setnewUsername(target.value)}
                            />
                            <div>
                                <label htmlFor="password">password: </label>
                                <input style={{ margin: '0.3rem' }}
                                    type="password"
                                    value={newpassword}
                                    placeholder="enter a new password"
                                    onChange={({ target }) => setnewPassword(target.value)}
                                />
                            </div>
                            <button style={buttonStyle} type="submit">Sign up</button>
                        </form>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
    //whenever rendering homepage, check whether there is a logged in user
    useEffect(() => {
        // console.log("im here");
        const loggedInUser = localStorage.getItem("User");
        // console.log(loggedInUser);
        if (loggedInUser) {
            // console.log(loggedInUser);
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, []);
    useEffect(()=>{
            if(user) localStorage.setItem('User', JSON.stringify(user));
        },[user]
    )

    //Edit user info
    //change all fields of User (state variable) and that in localstorage, and that in DB
    const handleEditSubmit = async (e)=>{
        e.preventDefault();
        if(editstate.password===''){alert("You must have input on all the fields!"); return;}
        if(editstate.first_name===''){alert("You must have input on all the fields!"); return;}
        if(editstate.last_name===''){alert("You must have input on all the fields!"); return;}
        // console.log(user);
        // console.log(editstate);
        const pswd = editstate.password;
        const fn = editstate.first_name;
        const ln = editstate.last_name;
        console.log(pswd+fn+ln);
        setUser(
            {
                username:user.username,
                password:pswd,
                first_name:fn,
                last_name:ln,
                profile_picture:user.profile_picture,
                description:user.description
            }
        )
        // console.log(pswd+fn+ln);
        // console.log(editstate);
        console.log(user);
        console.log(JSON.stringify(user));
        localStorage.setItem('User', JSON.stringify(user));
        console.log(localStorage.getItem('User'));
        setEditState({...editstate,password:"",first_name:"",last_name:"",message: "changes successfully stored!"})
    }

    //Login related render pages
    if (login == true) {
        if(editstate.display==true){
            return (
                <dev>
                <Container style={{textAlign: 'center'}}>
                    <button  style={buttonStyle} onClick={()=>{setEditState({...editstate,display:false,message:""})}}> Back </button>
                    <form id={"edit_form"} onSubmit={handleEditSubmit}>
                        <label htmlFor={"password"}> Edit your new password: </label>
                        <input type={"password"} value={editstate.password} onChange={(e)=>{setEditState({...editstate,password:e.target.value})}}/>
                        <br/>
                        <label htmlFor={"first name"}> Enter/Edit your firstname: </label>
                        <input type={"text"} value={editstate.first_name} onChange={(e)=>{setEditState({...editstate,first_name:e.target.value})}}/>
                        <br/>
                        <label htmlFor={"last name"}> Enter/Edit your lastname: </label>
                        <input type={"text"} value={editstate.last_name} onChange={(e)=>{setEditState({...editstate,last_name:e.target.value})}}/>
                        <br/>
                        <button style={buttonStyle} type="submit"> Confirm changes </button>
                    </form>
                    <dev style={{fontFamily:'dinopia-r'}}>{editstate.message} </dev>

                </Container>
                </dev>
            )
        }
        else {
            let warningMessage = <dev></dev>;
            //message can be set to true only when handlesubmit set it to true; it resets after rerender of page
            if (message === 1) {
                warningMessage = (
                    <Container style={{textAlign: 'center'}}>
                        <div style={{fontFamily: 'dinopia-r', fontSize: '1.5rem', color: MAROON}}>
                            Wrong account/password combination!
                        </div>
                    </Container>
                );
            } else if (message === 2) {
                warningMessage = (
                    <Container style={{textAlign: 'center'}}>
                        <div style={{fontFamily: 'dinopia-r', fontSize: '1.5rem', color: MAROON}}>Username already
                            exist!
                        </div>
                    </Container>
                );
            }
            return (
                <Container fluid className='bg-dino vh-100'>
                    <Container style={{padding: '5rem 0 0 0'}}>
                        {logincomponent}
                        {warningMessage}
                    </Container>
                </Container>
            );
        }
    }
    //Normal home page renders
    else return HomeRender;

}



export default App;

