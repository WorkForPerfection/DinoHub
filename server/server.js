const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

//make sure to replace this with your local mysql DB's information
const db = mysql.createConnection({
        user: "root",
        host:"localhost",
        password:"wangzihe0218",
        database:"dinohub"
    }
)

//api for dinosaur search
app.post("/dino_page",(req,res)=>{
    const curname = req.body.name;
    db.query(
       "SELECT * FROM dinosaur WHERE name=?",[curname],
        (err,result)=>{
           if(err){res.send(err)}
           else{
               // console.log(result[0]['Diet']);
               // return res.json(result);
               res.send(result);
           }
        }
    )
})

//api for user login
app.post("/login",(req,res)=>{
    const Username = req.body.username;
    const Password = req.body.password;
    db.query(
        "SELECT * FROM user WHERE (username=? AND password=?)",[Username,Password],
        (err,result)=>{
            if(err){
                console.log("error");res.send(err)}
            else{
                res.send(result);
            }
        }
    )
})

//api for user signup
app.post("/signup",(req,res)=>{
    const Username = req.body.newusername;
    const Password = req.body.newpassword;
    let exists = false;
    //first make sure no one is using the same username
    db.query(
        "SELECT * FROM user WHERE (username=?)",[Username],
        (err,result)=>{
            if(err){}
            else{
                if(result.length!=0){
                    exists=true;
                    // result[0].username="";
                    // return res.send(result);
                }
            }
        }
    )
    if(!exists) {
        db.query(
            "INSERT INTO user (username,password) VALUES (?,?)", [Username, Password],
            (err, result) => {
            }
        );
        db.query(
            "SELECT * FROM user WHERE (username=?)", [Username],
            (err, result) => {
                if (err) {
                    res.send(err)
                } else {
                        if(exists){
                            result[0].username="";
                        }
                        res.send(result);
                }
            }
        )
    }
})

const port = process.env.PORT || 8080;

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});