import './App.css';
import React, {useEffect, useState} from "react";
import {Route, Routes, Link, useNavigate} from "react-router-dom";
import {BuildYourOwn} from "./BuildYourOwn.js"
import {DinoEgg} from "./DinoEgg"
import {DailyRecommendation} from "./DailyRecommendation.js"
import {Home} from "./Home"
import {DinoPage} from "./DinoPage"
import {Explore} from "./explore"
import logo from "./pictures/DinoHubLogo.jpg"
import './general.module.css'
import {Box,Button} from "@mui/material";
import styles from "./general.module.css";
import axios from "axios";


function App(props) {
    const [DinoName,setDinoName] = useState("");
    const [login,setLogin] = useState(false);           //login=true means we want to render login page
    const [message,setMessage] = useState(0);       //message=1 means we need to pop up "invalid account/password combination" on login screen; message=2 means pop up "username exists!" on login screen
    const [user,setUser]=useState();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [newusername, setnewUsername] = useState("");
    const [newpassword, setnewPassword] = useState("");
    const navigate = useNavigate();

    //In your_dino_egg, if the user is not logged in, then we should display "login first"
    const HomeRender = (
        <dev>
            <Box sx={{backgroundColor:'lightblue',height:'120px',width:'2000px'} }>
                <img className={"logo"} src={logo} alt={"DinoHub small"}/>
                <nav style={{fontWeight:'bold'}}>
                    <Link className="home_link" to="/">Home</Link>
                    <Link className="build_your_own_dino_link" to="/build_your_own_dino">Build Your Own Dino</Link>
                    <Link className="daily_recommendation_link" to="/daily_recommendation">Daily Recommendation</Link>
                    <Link className="your_dino_egg_link"  to="/your_dino_egg">Your Dino Egg</Link>
                </nav>
                <dev2 className={"dev2"}>
                    <input type = "text" onChange={(event)=>{setDinoName(event.target.value)}}/>
                    <button onClick={()=>{navigate("/DinoPage",{state:{curname:DinoName}})}}> search </button>
                </dev2>
                <dev3 className={"dev3"}>
                    <button onClick={()=>{navigate("/discover")}}> discover </button>
                </dev3>
                <dev4 className={"login_link"}>
                    <button onClick={()=>{setLogin(true)}}> login </button>
                    {/*<button onClick={()=>{setUser({...User,name:"wang"})}}> User </button>*/}
                </dev4>cd
                <br/>
                <br/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/build_your_own_dino" element={<BuildYourOwn />} />
                    <Route path="/daily_recommendation" element={<DailyRecommendation />} />
                    <Route path="/your_dino_egg" element={<DinoEgg />} />
                    <Route path="/discover" element={<Explore />} />
                    <Route path="/DinoPage" element={<DinoPage />} />
                </Routes>
            </Box>
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
    if(user) {
        console.log(user);
        accountPage = (
            <dev>
                <button onClick={() => {
                    handleLogout()
                }}> log out
                </button>
                Username:{user[0].username}
                <br/>
                First name:{user[0].first_name}
                <br/>
                Last name:{user[0].last_name}
                <br/>
                profile_picture:{user[0].profile_picture}
            </dev>
        )
    }
    const handleLoginSubmit = async e => {
        e.preventDefault();
        // console.log("helloss");
        const user = {username, password};
        // console.log({username,password});
        const response = await axios.post(
            "http://localhost:8080/login",
            user
        );
        // console.log("helloss");
        //if login successful
        if(response.data.length!=0) {
            setUser(response.data);
            localStorage.setItem('User', JSON.stringify(response.data));
            setMessage(0);
        }
        else{setMessage(1);}
        // console.log("helloss");
        // console.log(response.data)
    };
    const handleSignUpSubmit = async e => {
        e.preventDefault();
        const user = {newusername, newpassword};
        const response = await axios.post(
            "http://localhost:8080/signup",
            user
        );
        //if sign up successful, user will log in automatically
        // console.log(response.data.length);
        if(response.data[0].username!="") {
            setUser(response.data);
            localStorage.setItem('User', JSON.stringify(response.data));
            setMessage(0);
        }
        else{setMessage(2);}
        // console.log(response.data)
    };
    //if user is already logged in, display the corresponding account info component
    if(user) {logincomponent=(
        <dev className={styles.content_begin}>
            <dev>
                <button onClick={()=>setLogin(false)}> Back </button>
                {accountPage}
            </dev>
        </dev>
    );}
    //else, display forms to log in/sign up
    else {logincomponent = (
        <dev>
            <button onClick={() => setLogin(false)}> Back </button>
            <form id={"form1"} onSubmit={handleLoginSubmit}>
                Log in to an existing account: <br/>
                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    value={username}
                    placeholder="enter a username"
                    onChange={({target}) => setUsername(target.value)}
                />
                <div>
                    <label htmlFor="password">password: </label>
                    <input
                        type="password"
                        value={password}
                        placeholder="enter a password"
                        onChange={({target}) => setPassword(target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <form id={"form2"} onSubmit={handleSignUpSubmit}>
                Sign up a new account: <br/>
                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    value={newusername}
                    placeholder="enter a new username"
                    onChange={({target}) => setnewUsername(target.value)}
                />
                <div>
                    <label htmlFor="password">password: </label>
                    <input
                        type="password"
                        value={newpassword}
                        placeholder="enter a new password"
                        onChange={({target}) => setnewPassword(target.value)}
                    />
                </div>
                <button type="submit">Sign up</button>
            </form>
        </dev>
    );
    }
    //whenever rendering homepage, check whether there is a logged in user
    useEffect(() => {
        // console.log("im here");
        const loggedInUser = localStorage.getItem("User");
        if (loggedInUser) {
            // console.log(loggedInUser);
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, []);
    if(login==true){
        let warningMessage=<dev></dev>;
        //message can be set to true only when handlesubmit set it to true; it resets after rerender of page
        if(message===1) {
            warningMessage=(
                <dev>
                    Wrong account/password combination!
                </dev>
            );
        }
        else if (message===2){
            warningMessage=(
                <dev>
                    Username already exist!
                </dev>
            );
        }
        return (
            <dev className={styles.content_begin}>
                {logincomponent}
                {warningMessage}
            </dev>
        );
    }
    else return HomeRender;

}

export default App;

