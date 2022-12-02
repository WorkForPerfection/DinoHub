import React from 'react';
import './App.css';
import DinoList from './components/DinoList';
import {Dinodata} from './Dinodata';
import Allo from './assets/images/Allosaurusimg.jpg'
// import {Route, Routes, Link, useNavigate} from "react-router-dom";

function DinoSound(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={Allo} className="App-logo" />           
          <h1 className="App-title">Welcome to our Dinoinfo Manager</h1>
        </header>
        <DinoList dino = {Dinodata} />
      </div>
)};

export default DinoSound;