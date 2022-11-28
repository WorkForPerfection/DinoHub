import styles from './general.module.css'
import Abel from "./pictures/Abelisaurus-dino.jpg"
import Diplo from "./pictures/Diplodocus-dino.jpg"
import Allo from "./pictures/Allosaurus-dino.jpg"
import React from "react";

export function Home(){
    return (
        <dev className = {styles.content_begin} >
            <p style={{fontSize:'20px'}}>
                <strong style={{fontSize:'40px'}}>
                    Welcome to Dino Hub!
                </strong>
            <br/>
            <br/>
                This is a place where dinosaur lovers can learn and share dinosaur facts, build your own customized dino-fossil, and even hatch your own dinosaur egg!
            <br/>
            <br/>
                To begin, sign up / log in to your DinoHub account. Then, you can search for a particular dinosaur's name in the search bar, or use the 'explore' functionality to browse through all dinosaurs in our database in various sorting methods.
            <br/>
            <br/>
                In addition, you can try out some of our custom features, including: <br/>
                the "daily recommendation" which tells you about a random dinosaur's facts every day;<br/>
                the 'build your own dino' feature, which allows you to create your own dinosaur skeleton from pieces of skeletons from existing dinosaurs;<br/>
                and the 'hatch dino egg' feature, where you can get a random dinosaur's egg which will be hatched in a period of 6 days. After the egg hatches, you will be able to see your dinosaur in your "park"; you can even name your dino! (can keep up to 10 dinos for each account)
            </p>
            <br/><br/>
            <p style={{fontSize:'20px'}}>
                Below are some pictures of dinosaurs in our database -- can you guess their names?
            </p>

            <img src={Abel} alt={"Abel"}/>
            <img src={Diplo} alt={"Diplo"}/>
            <img src={Allo} alt={"Allo"}/>
        </dev>
    );
}