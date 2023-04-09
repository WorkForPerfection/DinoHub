import { useNavigate } from "react-router-dom";
import styles from "./general.module.css";
import React, { useEffect, useState } from 'react';
import eggstage1 from './eggstage/eggstage1.jpg';
import eggstage2 from './eggstage/eggstage2.jpg';
import eggstage3 from './eggstage/eggstage3.jpg';
import eggstage4 from './eggstage/eggstage4.jpg';
import eggstage5 from './eggstage/eggstage5.jpg';
import eggstage6 from './eggstage/eggstage6.jpg';

import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import { NAVY } from './css/colors'
import axios from "axios";

function Hatching(props) {
  const User = props.user;
  var [dino_image, set_dino_egg] = useState(<dev></dev>)
  console.log("************************ begins here ******************************")
  var [flag, set_flag] = useState(0);
  var [isinserted, set_isinserted] = useState(0);
  function getYourEgg() {
    const useridval = { userid: User.id };
    console.log("**********************");
    console.log('The flag is '+flag);
    console.log(useridval);
    axios.post("http://localhost:8080/your_hatching_dino_egg", { userid: User.id }).then(function (response) {
      console.log("___________________insert successful_____________________");
      console.log(flag);
      return response;
    }).
    catch(error=>{console.log(error)}).
    then(function (response){
      axios.post("http://localhost:8080/check_hatching_egg", useridval).then( function
        (response){
          console.log("Right here")
          set_dino_egg(<img src={eggstage1} alt=" Eggstage1" />)
          console.log("Current Flag is"+flag);
          set_flag(1);
        });
    })
  };
  console.log(flag);
  if (flag === 0) {
    return (
      <div className="Hatching">
        <p style={{ fontFamily: 'dinopia-r', fontSize: '3rem', margin: '2rem', color: NAVY }}>Hatching your egg!</p>
        <button className="button-d" style={{ fontSize: '2rem' }} onClick={() => getYourEgg()}>
          Get an egg 🥚 and happy hatching!
        </button>
        {dino_image}
      </div>
    );
  }
  else if (flag === 1) {
    const useridval = { userid: User.id };
    axios.post("http://localhost:8080/check_hatching_egg", useridval).then(
      (response) => {
        let starttime = response.data[0].startdate + '';
        let s_time =  (new Date().getTime()/1000);
        let c_time = (new Date().getTime()/1000);
        //console.log("__________________________________");
        console.log(s_time);
        //
        do {
          c_time = (new Date().getTime()/1000);
        } while ((c_time - s_time) <= 0)
        console.log(c_time);
        //console.log("Right here")
        if (c_time - s_time > 0) {
          console.log(flag);
          set_dino_egg(<img src={eggstage2} alt=" Eggstage2" />)
          set_flag(2);
          c_time = null
        }
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
  else if (flag === 2) {
    const useridval = { userid: User.id };
    axios.post("http://localhost:8080/check_hatching_egg", useridval).then(
      (response) => {
        let starttime = response.data[0].startdate + '';
        let s_time =  (new Date().getTime()/1000);
        let c_time = (new Date().getTime()/1000);
        //console.log("__________________________________");
        console.log(s_time);
        //
        do {
          c_time = (new Date().getTime()/1000);
        } while ((c_time - s_time) <= 1)
        console.log(c_time);
        //console.log("Right here")
        //console.log("Right here")
        console.log(flag);
        set_dino_egg(<img src={eggstage3} alt=" Eggstage3" />)
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
  else if (flag === 3) {
    const useridval = { userid: User.id };
    axios.post("http://localhost:8080/check_hatching_egg", useridval).then(
      (response) => {
        let starttime = response.data[0].startdate + '';
        let s_time =  (new Date().getTime()/1000);
        let c_time = (new Date().getTime()/1000);
        //console.log("__________________________________");
        console.log(s_time);
        //
        do {
          c_time = (new Date().getTime()/1000);
        } while ((c_time - s_time) <= 1)
        console.log(c_time);
        //console.log("Right here")
        console.log(flag);
        set_dino_egg(<img src={eggstage4} alt=" Eggstage4" />)
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
  else if (flag === 4) {
    const useridval = { userid: User.id };
    axios.post("http://localhost:8080/check_hatching_egg", useridval).then(
      (response) => {
        let starttime = response.data[0].startdate + '';
        let s_time =  (new Date().getTime()/1000);
        let c_time = (new Date().getTime()/1000);
        //console.log("__________________________________");
        console.log(s_time);
        //
        do {
          c_time = (new Date().getTime()/1000);
        } while ((c_time - s_time) <= 1)
        console.log(c_time);
        //console.log("Right here")
        console.log(flag);
        set_dino_egg(<img src={eggstage5} alt=" Eggstage5" />)
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
  else if (flag === 5) {
    const useridval = { userid: User.id };
    axios.post("http://localhost:8080/check_hatching_egg", useridval).then(
      (response) => {
        let starttime = response.data[0].startdate + '';
        let s_time =  (new Date().getTime()/1000);
        let c_time = (new Date().getTime()/1000);
        //console.log("__________________________________");
        console.log(s_time);
        //
        do {
          c_time = (new Date().getTime()/1000);
        } while ((c_time - s_time) <= 1)
        console.log(c_time);
        //console.log("Right here")
        console.log(flag);
        set_dino_egg(<img src={eggstage6} alt=" Eggstage6" />)
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
  else if (flag === 6) {
    const useridval = { userid: User.id };
    axios.post("http://localhost:8080/check_hatching_egg", useridval).then(
      (response) => {
        let starttime = response.data[0].startdate + '';
        let s_time =  (new Date().getTime()/1000);
        let c_time = (new Date().getTime()/1000);
        //console.log("__________________________________");
        console.log(s_time);
        //
        do {
          c_time = (new Date().getTime()/1000);
        } while ((c_time - s_time) <= 1)
        console.log(c_time);
        //console.log("Right here")
        console.log(flag);
        props.setPage(false)
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
  else {
    // const useridval = {userid:User.id};
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
        <p>Your egg is hatched! Go to hatched page to claim your dino !</p>
        <img src={eggstage6} alt="stage_final" />
      </div>
    )
  }
}

function Hatched(props) {
  let hatched = false;
  const User = props.user;
  console.log(User)
  const [dino_image, set_dino_image] = useState(<dev></dev>)
  const [dino_name, set_dino_name] = useState("")
  const [dino_id, set_dino_id] = useState(0)
  const userid = User.id;
  const getYourDino = () => {
    // console.log(12)
    const curstate = { userid, dino_name }
    axios.post("http://localhost:8080/your_hatched_dino_egg", curstate).then((response) => {
      // console.log(response.data);
      // console.log(response.data[0].dino_picture);
      set_dino_image(<img src={require(`${response.data[0].dino_picture}`)} alt="your_dino_picture" />);
      return response;
    })
      .then((response) => {
        // console.log("responsedataid: "+response.data[0].id)
        const tmp = response.data[0].id;
        // console.log("dinoid: "+tmp);
        axios.post("http://localhost:8080/create_user_dino_relation", { userid, dino_name, tmp }).then(
          (response) => {

          }
        )
      }
      );
  };
  function displayYourDinos() {
    const User = props.user
    console.log("this is " + User);
    axios.post("http://localhost:8080/display_hatched_dinos", User).then((response) => {
      var dinosaurs = []
      console.log(response.data)
      for (var i = 0; i < response.data.dino_names.length; i++) {
        var name = response.data.dino_names[i]
        var pic = response.data.dino_pics[i]
        dinosaurs.push({ name, pic })
      }

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
      <Row>
        <Col>
          <Card style={{
            fontFamily: 'dinopia-r',
            margin: '3rem'
          }}>
            <input type="text"
              placeholder='Name your Dino'
              onChange={(e) => { set_dino_name(e.target.value) }}
              style={{ margin: '1rem' }} />
            <button onClick={getYourDino} className='button-d' style={{ margin: '1rem' }}>
              Claim your Dino
            </button>
          </Card>
          {dino_image}
          {dino_name}

        </Col>
        <Col>
          <button onClick={() => displayYourDinos()} 
          className='button-d'
          style={{margin: '5rem 0 0 0', fontSize: '2rem'}}>
            Click here to see the dinos you hatched!
          </button>
        </Col>
      </Row>
    </div >
  );
}

function App(props) {
  const User = props.user;
  //console.log("this is App" + User);
  const [hatching, setHatching] = useState(true);
  return (
    <Container>
      <Tabs fill style={{ fontFamily: 'dinopia-r', fontSize: '2rem' }}>
        <Tab eventKey='hatching' title='Hatching'>
          <Hatching user={User} setPage={setHatching}/>
        </Tab>
       <Tab eventKey='hatched' title='Hatched' disabled={hatching}>
          <Hatched user={User} />
        </Tab>
      </Tabs>
    </Container>
    // <div className="App">
    //   <button onClick={() => setcurPage('Hatched')}>
    //     Go to Hatched page
    //   </button>
    //   <button onClick={() => setcurPage('Hatching')}>
    //     Back
    //   </button>
    //   {
    //     curPage === "Hatching" ? <Hatching user={User} /> : <Hatched user={User} />
    //   }
    // </div>
  );
}

export function DinoEgg(props) {
  const navigate = useNavigate();
  const User = props.User;
  const func = props.Func;
  console.log(typeof User);
  if (typeof User == 'undefined') {
    navigate('/');
    //console.log("undefined");
    func(true);

  }
  if (typeof User != 'undefined') {
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
}
