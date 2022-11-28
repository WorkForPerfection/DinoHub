import './css/App.css';
import './css/Dino.css'
import React, { useEffect, useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { BuildYourOwn } from "./BuildYourOwn.js"
import { DinoEgg } from "./DinoEgg"
import { DailyRecommendation } from "./DailyRecommendation.js"
import { Home } from "./Home"
import { DinoPage } from "./DinoPage"
import { Explore } from "./explore"
import './general.module.css'
import styles from "./general.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Logo from './components/Logo'
import './css/Dino.css'
import { MINT, NAVY } from "./css/colors"
import { fontFamily } from '@mui/system';

function App(props) {
    const [DinoName, setDinoName] = useState("");
    const [login, setLogin] = useState(false);           //login=true means we want to render login page
    const [User, setUser] = useState({});
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const linkStyle = {
        color: 'white',
        margin: '1rem',
        fontSize: '1.3rem'
    }

    const formStyle = {
        height: '2rem',
        mergin: '3rem',
        verticalAlign: 'center'
    }

    const buttonStyle = {
        backgroundColor: 'white',
        color: NAVY,
        fontFamily: 'dinopia-r',
        margin: '0.8rem',
        borderColor: MINT
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
                    <Button style={buttonStyle} onClick={() => { navigate("/DinoPage", { state: { curname: DinoName } }) }}> search </Button>
                </Nav>
                <Nav>
                    <Button style={buttonStyle} onClick={() => { navigate("/discover") }}> discover </Button>
                </Nav>
                <Nav>
                    <Button style={buttonStyle} onClick={() => { setLogin(true) }}> login </Button>
                    <Button style={buttonStyle} onClick={() => { setUser({ ...User, name: "wang" }) }}> User </Button>
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
    let logincomponent;
    const handleSubmit = async e => {

    };
    if (User.name) {
        logincomponent = (
            <dev className={styles.content_begin}>
                <dev>
                    <button onClick={() => setLogin(false)}> Back </button>

                </dev>
            </dev>
        );
    }
    else {
        logincomponent = (
            <div className={styles.content_begin}>
                <button onClick={() => setLogin(false)}> Back </button>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        value={username}
                        placeholder="enter a username"
                        onChange={({ target }) => setUsername(target.value)}
                    />
                    <div>
                        <label htmlFor="password">password: </label>
                        <input
                            type="password"
                            value={password}
                            placeholder="enter a password"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
    if (login == true) {
        return logincomponent;
    }
    else return HomeRender;

}

export default App;

