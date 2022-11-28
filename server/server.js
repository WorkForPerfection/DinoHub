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

const port = process.env.PORT || 8080;

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});