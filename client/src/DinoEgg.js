import { useNavigate } from "react-router-dom";
import styles from "./general.module.css";
import React, { useEffect, useState } from 'react';
import eggstage1 from './eggstage/eggstage1.jpg';
import eggstage2 from './eggstage/eggstage2.jpg';
import eggstage3 from './eggstage/eggstage3.jpg';
import eggstage4 from './eggstage/eggstage4.jpg';
import eggstage5 from './eggstage/eggstage5.jpg';
import eggstage6 from './eggstage/eggstage6.jpg';
import Axios from 'axios'

import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'


function Hatching(props) {
  const User = props.user;
  const [dino_egg, set_dino_egg] = useState(<dev></dev>)
  const getYourEgg = () => {
    const useridval = { userid: User[0].id };
    Axios.post("http://localhost:8080/your_hatching_dino_egg", useridval).then((response) => {
      // const starttime = response.data[0].startdate;
      // console.log(response.data);
      // set_dino_egg(<img src = {eggstage1} alt= " Eggstage1" />)
      console.log("insert successful");
      return response;
    }).then((response) => {

      Axios.post("http://localhost:8080/check_hatching_egg", useridval).then((response) => {
        let starttime = response.data[0].startdate;
        console.log(starttime);
        set_dino_egg(<img src={eggstage1} alt=" Eggstage1" />)
      });
    })

    // console.log(dino_egg)
    // console.log(11)
  };
  return (
    <div className="Hatching">
      <p style={{ fontFamily: 'dinopia-r' }}>Hatching your egg!</p>
      <button className='button-d' onClick={getYourEgg}>
        Get an egg and happy hatching!
      </button>
      {dino_egg}
      {/* {count === 2 && <img src = {eggstage2} alt= " Eggstage2" />}
   {count === 3 && <img src = {eggstage3} alt= " Eggstage3" />}
   {count === 4 && <img src = {eggstage4} alt= " Eggstage4" />}
   {count === 5 &&<img src = {eggstage5} alt= " Eggstage5" />}
   {count >= 6 && <img src = {eggstage6} alt= " Eggstage6" />} */}
    </div>
  );
}

function Hatched(props) {
  let hatched = false;
  const User = props.user;
  const [dino_image, set_dino_image] = useState(<dev></dev>)
  const [dino_name, set_dino_name] = useState("")
  const [dino_id, set_dino_id] = useState(0)
  const userid = User[0].id;
  const getYourDino = () => {
    // console.log(12)
    const curstate = { userid, dino_name }
    Axios.post("http://localhost:8080/your_hatched_dino_egg", curstate).then((response) => {
      // console.log(response.data);
      // console.log(response.data[0].dino_picture);
      console.log(response)
      set_dino_image(
        <img src={require(`${response[0].dino_picture}`)} alt="your_dino_picture" />

      );
      return response;
    })
    // .then((response) => {
    //   // console.log("responsedataid: "+response.data[0].id)
    //   const tmp = response.data[0].id;
    //   // console.log("dinoid: "+tmp);
    //   Axios.post("http://localhost:8080/create_user_dino_relation", { userid, dino_name, tmp }).then(
    //     (response) => {

    //     }
    //   )
    // }
    // );
  };

  function displayYourDinos() {
    const User = props.user
    const userid = { userid: User[0].id }
    console.log(userid)
    Axios.post("http://localhost:8080/display_hatched_dinos", userid).then((response) => {
      console.log(response.data)
      var dinosaurs = []
      for (var i = 0; i < response.data.dino_names.length; i++) {
        var name = response.data.dino_names[i]
        var pic = response.data.dino_pics[i]
        dinosaurs.push({ name, pic })
      }

      console.log(dinosaurs)

      function DinoImages() {
        return (
          <div>
            {dinosaurs.map((dino) => {
              return (
                <div>
                  <img src={require(`${dino.pic}`)} alt="your_dino_picture" />
                  <div>{dino.name}</div>
                </div>
              )
            })}
          </div>
        )
      }

      set_dino_image(
        <DinoImages />
      )
    })
  };
  return (
    <div>
      <input type="text" onChange={(e) => { set_dino_name(e.target.value) }} />
      <button onClick={getYourDino}>
        Claim your Dino
      </button>
      {dino_image}
      {dino_name}
      <button onClick={() => displayYourDinos()} >
        Here are the dinos you hatched!
      </button>
    </div>
  );
}

function App(props) {
  const User = props.user;
  const [curPage, setcurPage] = useState('Hatching');
  return (
    <Container>
      <Tabs>
        <Tab eventKey="hatched" title="Hatched Dinos">
          <Hatched user={User} />
        </Tab>
        <Tab eventKey="hatcing" title="Hatching">
          <Hatching user={User} />
        </Tab>
      </Tabs>
      {/* <button className='button-d' onClick={() => setcurPage('Hatched')}>
        Go to Hatched page
      </button>
      <button className='button-d' onClick={() => setcurPage('Hatching')}>
        Back
      </button>
      {
        curPage === "Hatching" ? <Hatching user={User} /> : <Hatched user={User} />
      } */}
    </Container>
  );
}

export function DinoEgg(props) {
  const navigate = useNavigate();
  const User = props.User;
  const func = props.Func;
  useEffect(() => {
    if (!User) {
      navigate('/');
      func(true);
    }
  })
  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={() => navigate(-1)}
        className='button-d'
        style={{
          margin: '3rem'
        }}> Back </button>
      <App user={User} />
    </div>
  );
}
