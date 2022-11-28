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


function App(props) {
    const [DinoName,setDinoName] = useState("");
    const [login,setLogin] = useState(false);           //login=true means we want to render login page
    const [User,setUser]=useState({});
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
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
    let logincomponent;
    const handleSubmit = async e => {

    };
    if(User.name) {logincomponent=(
        <dev className={styles.content_begin}>
            <dev>
                <button onClick={()=>setLogin(false)}> Back </button>

            </dev>
        </dev>
    );}
    else {logincomponent = (
            <dev className={styles.content_begin}>
                <button onClick={() => setLogin(false)}> Back </button>
                <form onSubmit={handleSubmit}>
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
            </dev>
        );
    }
    if(login==true){
        return logincomponent;
    }
    else return HomeRender;

}

export default App;

