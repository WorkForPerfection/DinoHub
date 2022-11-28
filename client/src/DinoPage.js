import {useLocation, useNavigate} from "react-router-dom";
import axios from 'axios'
import styles from "./general.module.css";
import {useEffect, useState} from "react";
import {Box} from '@mui/material'

export function DinoPage(props){
    const navigate = useNavigate();
    const location = useLocation();
    const dinoname = location.state.curname;
    const [dinoInfo,setdinoInfo] = useState([]);
    useEffect(()=>{
    axios.post("http://localhost:8080/dino_page",{name:dinoname}).then(
        (response)=>{
           setdinoInfo(response.data);
        }
    ).catch()},[])
    const dinoDisplay = (
        <Box sx={{borderStyle: 'dashed'}}>
            {dinoInfo.map((dino)=>
                <dev style={{fontWeight:'bold'}}>
                    Dinosaur Name: {dino.name} <br/>
                    Dinosaur Type: {dino.type} <br/>
                    The period they lived in: {dino.period} <br/>
                    Where they were found: {dino.found_in} <br/>
                    Diet: {dino.Diet} <br/>
                    Length: {dino.Length} <br/>
                    <img src={require(`${dino.dino_picture}`)}/>
                    <img src={require(`${dino.dino_size_picture}`)}/>
                </dev>
            )
            }
        </Box>
    );
    if(dinoInfo.length===0){return (
        <dev className={styles.content_begin}>
            <button onClick={()=>navigate(-1)}> Back </button>
            <br/>
            <dev style={{fontSize:'20px',fontWeight:'bold'}}>Sorry, the dinosaur you entered is not in our database.</dev>
            <br/>
            *** To start another search, please use the 'Back' button to return to the previous page, or go back to home. ***
        </dev>
        )
    }
    else return (
        <dev className={styles.content_begin}>
            <button onClick={()=>navigate(-1)}> Back </button>
            <br/>
            {dinoDisplay}
            <br/>
            *** To start another search, please use the 'Back' button to return to the previous page, or go back to home. ***
        </dev>
    );
}