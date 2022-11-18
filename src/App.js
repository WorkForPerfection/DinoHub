import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {Login} from "./Login";
import {Signup} from "./Signup";
function App() {
  const [curPage, setcurPage] = useState('login');
  const switchPage = (page) => {
        setcurPage(page);
        }

  return (
    <div className="App">
	{
	curPage === "login" ? <Login onFormSwitch={switchPage} /> : <Signup onFormSwitch={switchPage} />
	}
    </div>
  );
}

export default App;
