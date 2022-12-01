import {useNavigate} from "react-router-dom";
import styles from "./general.module.css";
import React, { useEffect, useState } from 'react';
import eggstage1 from './eggstage/eggstage1.jpg';
import eggstage2 from './eggstage/eggstage2.jpg';
import eggstage3 from './eggstage/eggstage3.jpg';
import eggstage4 from './eggstage/eggstage4.jpg';
import eggstage5 from './eggstage/eggstage5.jpg';
import eggstage6 from './eggstage/eggstage6.jpg';
import Axios from 'axios'
function Hatching() 
{
    // egg_count = db.query
   const [count, setCount] = React.useState(0);
   const add = () => {
      setCount (count + 1)
   }
   return (
    <div className="Hatching">
    <p>Hatching your egg!</p>
       <button onClick={add}>
        Get an egg and happy hatching!
    </button>
   {count === 1 && <img src = {eggstage1} alt= " Eggstage1" />}
   {count === 2 && <img src = {eggstage2} alt= " Eggstage2" />}
   {count === 3 && <img src = {eggstage3} alt= " Eggstage3" />}
   {count === 4 && <img src = {eggstage4} alt= " Eggstage4" />}
   {count === 5 &&<img src = {eggstage5} alt= " Eggstage5" />}
   {count >= 6 && <img src = {eggstage6} alt= " Eggstage6" />}
    </div>
   );
}

function Hatched()
{
    const [dino_image,set_dino_image] = useState(<dev></dev>)
    const getYourDino = () => {
      // console.log(12)
        Axios.get("http://localhost:8080/your_dino_egg").then((response) => {
          // console.log(response.data);
          // console.log(response.data[0].dino_picture);
          set_dino_image(<img src={require(`${response.data[0].dino_picture}`)} alt = "your_dino_picture"/>)
          // console.log(dino_image);
        });
      };
    return (
   <div className="Hatched">
     <button onClick={getYourDino}>
        Claim your Dino
        {dino_image}
    </button>
   <p>Here are the dinos you hatched!</p>
   </div>
    );
}

function App() {
    const [curPage, setcurPage] = useState('Hatching');
    return (
      <div className="App">
        <button onClick={() => setcurPage('Hatched')}>
         Go to Hatched page 
      </button>
      <button onClick={() => setcurPage('Hatching')}>
          Back
       </button>
      {
      curPage === "Hatching" ? <Hatching /> : <Hatched />
      }
      </div>
    );
  }

  export function DinoEgg(props){
    const navigate = useNavigate();
    const User = props.User;
    const func = props.Func;
    useEffect(()=>{
        if(!User){
            navigate('/');
            func(true);
        }
    })
    return (
        <dev className={styles.content_begin}>
        <button onClick={()=>navigate(-1)}> Back </button>
            <App/>
        </dev>
    );
}
