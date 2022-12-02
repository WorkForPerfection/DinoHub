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



function Hatching(props) 
{
  const User = props.user;
  var [dino_image,set_dino_egg] = useState(<dev></dev>)
  var [flag, set_flag] = useState(0);
  function getYourEgg() {
    const useridval = {userid:User[0].id};
    console.log("**********************");
    
    Axios.post("http://localhost:8080/your_hatching_dino_egg",useridval).then((response) => {
        console.log("insert successful");
        return response;
      }).then((response)=>{
          Axios.post("http://localhost:8080/check_hatching_egg",useridval).then(
            (response) => {
              //console.log("Right here")
              set_dino_egg(<img src={eggstage1} alt= " Eggstage1" />)
              set_flag(1);
      });
      })
    };
  console.log(flag);
  if(flag === 0){
    return (
      <div className="Hatching">
      <p>Hatching your egg!</p>
         <button onClick={() => getYourEgg()}>
          Get an egg and happy hatching!
      </button>
      {dino_image}
      </div>
     );
  }
  else if(flag === 1){
    const useridval = {userid:User[0].id};
    Axios.post("http://localhost:8080/check_hatching_egg",useridval).then(
            (response) => {
              let starttime = response.data[0].startdate + '';
              let s_time = new Date(starttime);
              let c_time = new Date();
              console.log("__________________________________");
              console.log(c_time);
              //
              do{
                c_time = new Date();
              } while((c_time-s_time)<=1000)
              //console.log("Right here")
              c_time = null;
              set_dino_egg(<img src={eggstage2} alt= " Eggstage2" />)
              set_flag(2);
      });
    
    return (
      <div className="Hatching">
        <p>Hatching your egg!</p>
         <button>
          Get an egg and happy hatching!
      </button>
      {dino_image}
      </div>
    )
  }
  else if(flag === 2){
    const useridval = {userid:User[0].id};
    Axios.post("http://localhost:8080/check_hatching_egg",useridval).then(
            (response) => {
              let starttime = response.data[0].startdate + '';
              let s_time = new Date(starttime);
              let c_time = new Date();
              console.log("__________________________________");
              console.log(c_time);
              //
              do{
                c_time = new Date();
              } while((c_time-s_time)<=2000)
              //console.log("Right here")
              set_dino_egg(<img src={eggstage3} alt= " Eggstage3" />)
              set_flag(3);
      });
    
    return (
      <div className="Hatching">
        <p>Hatching your egg!</p>
         <button>
          Get an egg and happy hatching!
      </button>
      {dino_image}
      </div>
    )
  }
  else if(flag === 3){
    const useridval = {userid:User[0].id};
    Axios.post("http://localhost:8080/check_hatching_egg",useridval).then(
            (response) => {
              let starttime = response.data[0].startdate + '';
              let s_time = new Date(starttime);
              let c_time = new Date();
              console.log("__________________________________");
              console.log(c_time);
              //
              do{
                c_time = new Date();
              } while((c_time-s_time)<=3000)
              //console.log("Right here")
              set_dino_egg(<img src={eggstage4} alt= " Eggstage4" />)
              set_flag(4);
      });
    
    return (
      <div className="Hatching">
        <p>Hatching your egg!</p>
         <button>
          Get an egg and happy hatching!
      </button>
      {dino_image}
      </div>
    )
  }
  else if(flag === 4){
    const useridval = {userid:User[0].id};
    Axios.post("http://localhost:8080/check_hatching_egg",useridval).then(
            (response) => {
              let starttime = response.data[0].startdate + '';
              let s_time = new Date(starttime);
              let c_time = new Date();
              console.log("__________________________________");
              console.log(c_time);
              //
              do{
                c_time = new Date();
              } while((c_time-s_time)<=4000)
              //console.log("Right here")
              set_dino_egg(<img src={eggstage5} alt= " Eggstage5" />)
              set_flag(5);
      });
    
    return (
      <div className="Hatching">
        <p>Hatching your egg!</p>
         <button>
          Get an egg and happy hatching!
      </button>
      {dino_image}
      </div>
    )
  }
  else if(flag === 5){
    const useridval = {userid:User[0].id};
    Axios.post("http://localhost:8080/check_hatching_egg",useridval).then(
            (response) => {
              let starttime = response.data[0].startdate + '';
              let s_time = new Date(starttime);
              let c_time = new Date();
              console.log("__________________________________");
              console.log(c_time);
              //
              do{
                c_time = new Date();
              } while((c_time-s_time)<=5000)
              //console.log("Right here")
              set_dino_egg(<img src={eggstage6} alt= " Eggstage6" />)
              set_flag(6);
      });
    
    return (
      <div className="Hatching">
        <p>Hatching your egg!</p>
         <button>
          Get an egg and happy hatching!
      </button>
      {dino_image}
      </div>
    )
  }
  else if(flag === 6){
    const useridval = {userid:User[0].id};
    Axios.post("http://localhost:8080/check_hatching_egg",useridval).then(
            (response) => {
              let starttime = response.data[0].startdate + '';
              let s_time = new Date(starttime);
              let c_time = new Date();
              console.log("__________________________________");
              console.log(c_time);
              //
              do{
                c_time = new Date();
              } while((c_time-s_time)<=6000)
              //console.log("Right here")
      });
    
    return (
      <div className="Hatching">
        <p>Hatching your egg!</p>
         <button>
          Get an egg and happy hatching!
      </button>
      {dino_image}
      </div>
    )
  }
  else{
    // const useridval = {userid:User[0].id};
    // Axios.post("http://localhost:8080/check_hatching_egg",useridval).then(
    //         (response) => {
    //           let starttime = response.data[0].startdate + '';
    //           let s_time = new Date(starttime);
    //           let c_time = new Date();
    //           console.log("__________________________________");
    //           console.log(c_time);
    //           //
    //           do{
    //             c_time = new Date();
    //           } while((c_time-s_time)<=60000)
    //           //console.log("Right here")
    //   });
    
    return (
      <div className="Hatching">
        <p>Hatching your egg!</p>
         <button>
          Get an egg and happy hatching!
      </button>
      <img src={eggstage6} alt="stage_final" />
      </div>
    )
  }
}

function Hatched(props)
{
    let hatched = false;
    const User = props.user;
    const [dino_image,set_dino_image] = useState(<dev></dev>)
    const [dino_name,set_dino_name]=useState("")
    const [dino_id,set_dino_id] = useState(0)
    const userid = User.id;
    const getYourDino = () => {
      // console.log(12)
      const curstate = {userid,dino_name}
        Axios.post("http://localhost:8080/your_hatched_dino_egg",curstate).then((response) => {
          // console.log(response.data);
          // console.log(response.data[0].dino_picture);
          set_dino_image(<img src={require(`${response.data[0].dino_picture}`)} alt = "your_dino_picture"/>);
          return response;
        }).then((response)=>{
          // console.log("responsedataid: "+response.data[0].id)
          const tmp = response.data[0].id;
          // console.log("dinoid: "+tmp);
          Axios.post("http://localhost:8080/create_user_dino_relation",{userid,dino_name,tmp}).then(
            (response)=>{
                
            }
          )
        }
        );
      };
      const displayYourDinos = () => {
        Axios.post("http://localhost:8080/display_hatched_dinos").then((response) => {
          set_dino_image(<img src={require(`${response.data[0].dino_picture}`)} alt = "your_dino_picture"/>);
          return response;
      })
    };
    return (
   <div className="Hatched">    
   <input type="text" onChange={(e)=>{set_dino_name(e.target.value)}}/>
     <button onClick={getYourDino}>
        Claim your Dino
    </button>
    {dino_image}
    {dino_name}
   <button onClick = {displayYourDinos} >
   Here are the dinos you hatched!
   </button>
   </div>
    );
}

function App(props) {
   const User = props.user;
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
      curPage === "Hatching" ? <Hatching user={User}/> : <Hatched user={User}/>
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
            <App user = {User}/>
        </dev>
    );
}
