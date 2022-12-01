const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const cron = require('node-cron');

app.use(cors());
app.use(express.json());

//make sure to replace this with your local mysql DB's information
const db = mysql.createConnection({
    user: "root",
    password:"password",
    host: "localhost",
    database: "dinohub"
}
)


//api for dinosaur search
app.post("/dino_page", (req, res) => {
    const curname = req.body.name;
    db.query(
        "SELECT * FROM dinosaur WHERE name=?", [curname],
        (err, result) => {
            if (err) { res.send(err) }
            else {
                // console.log(result[0]['Diet']);
                // return res.json(result);
                res.send(result);
            }
        }
    )
})

//api for user login
app.post("/login", (req, res) => {
    const Username = req.body.username;
    const Password = req.body.password;
    db.query(
        "SELECT * FROM user WHERE (username=? AND password=?)", [Username, Password],
        (err, result) => {
            if (err) {
                console.log("error"); res.send(err)
            }
            else {
                res.send(result);
            }
        }
    )
})

//api for user signup
app.post("/signup", (req, res) => {
    const Username = req.body.newusername;
    const Password = req.body.newpassword;
    let exists = false;
    //first make sure no one is using the same username
    // console.log("h");
    db.query(
        "SELECT * FROM user WHERE (username=?)", [Username],
        (err, result) => {
            if (err) { }
            else {
                if (result.length != 0) {
                    exists = true;
                    // result[0].username="";
                    // return res.send(result);
                }
            }
        }
    )
    if (!exists) {
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
                    if (exists) {
                        result[0].username = "";
                    }
                    res.send(result);
                }
            }
        )
    }
})


app.post("/add_likes",(req,res)=>{
        const DinoName = req.body.dinoname;
        var curlikes;
        db.query(
            "SELECT Likes FROM dinosaur WHERE name=?",[DinoName],
            (err,result)=>{
                if(err){
                    console.log(err);
                }
                else{
                    curlikes = result[0];
                    // console.log(result);
                    // console.log(curlikes);
                    curlikes.Likes += 1;
                    // console.log(curlikes.Likes);
                    // console.log(curlikes.Likes+1);
                    db.query(
                        "UPDATE dinosaur SET Likes=? WHERE name = ?", [curlikes.Likes, DinoName],
                        (err, result) => {
                            if (err) {
                                res.send(err)
                            } else {
                                res.send(curlikes + 1);
                            }
                        }
                    )
                }
            }
        )
    }
)


// --------------daily dino api------------

app.get("/", (req, res) => {
    res.json({ message: "ok port: " + port });
});

//api to get all dinos
app.get("/dino/all", (req, res) => {
    var limit = req.query.limit ? req.body.limit : 5
    db.query(
        "SELECT * FROM dinosaur LIMIT ?", [limit],
        (err, result) => {
            if (err) {
                console.log("error");
                res.json(err)
            }
            else {
                res.json(result);
            }
        }
    )
})

//app to get and daily dinos and return in descending date
app.get("/dino/today", (req, res) => {
    var limit = req.query.limit ? req.body.limit : 20
    db.query(
        "SELECT * FROM dailydino ORDER BY date DESC LIMIT ?", [limit],
        (err, result) => {
            if (err) {
                console.log(err);
                res.json(err)
            }
            else {
                var days = result
                var dailydinoIds = []
                for (var i = 0; i < days.length; i++) {
                    dailydinoIds.push(result[i].dinosaur_id)
                }
                var dinoList = dailydinoIds.join(',')
                var str = '(' + dinoList + ')'
                // console.log(dailydinoIds)
                // res.json(str)
                db.query(
                    `SELECT * from dinosaur WHERE id in ${str}`,
                    (err, result) => {
                        for (var i = 0; i < days.length; i++) {
                            for (var j = 0; j < result.length; j++) {
                                if (days[i].dinosaur_id == result[j].id)
                                    days[i]['dinosaur'] = result[j]
                            }
                        }
                        res.json(days)
                    }
                )

            };
        }
    )
})

/* generate daily dino (every 1 hour at 0 minute) */
/* change the string below to change frequency of generation */
// e.g. to generate every 10 seconds use '*/10 * * * * *'
// e.g. to generate every day at midnight use '0 0 0 * * *'
cron.schedule('0 0 * * * *', function () {
    generateDailyDino()
})

function generateDailyDino() {
    console.log('attempts to generate daily dino')
    /* limit the new dino was not recently selected, query past 10 days of daily dinos*/
    db.query(
        "SELECT dinosaur_id, date FROM dailydino ORDER BY date DESC LIMIT 10",
        (err, result) => {
            var pastids = []
            var last_date = new Date(result[0].date)
            for (var i = 0; i < result.length; i++) {
                pastids.push(result[i].dinosaur_id)
            }
            // console.log(pastids)
            var str = '(' + pastids.join(',') + ')'
            // console.log(str)
            // /* select random dino from all */
            db.query(
                `SELECT id FROM dinosaur WHERE id NOT IN ${str} ORDER BY RAND() LIMIT 1`,
                (err, result) => {
                    var new_dino = result[0].id
                    var new_date = new Date(last_date)
                    new_date.setDate(new_date.getDate() + 1)
                    console.log(new_dino, new_date)
                    db.query(
                        `INSERT INTO dailydino (date, dinosaur_id) VALUES ('${formatDate(new_date)}', ${new_dino})`,
                        (err, result) => {
                            if (err) {
                                console.log(err)
                            } else {
                                console.log('successfully added daily dino!')
                            }
                        })

                }
            )
        }
    )
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

const port = process.env.PORT || 8080;

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});
