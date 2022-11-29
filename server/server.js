const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

//make sure to replace this with your local mysql DB's information
const db = mysql.createConnection({
    user: "yubozhang",
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
app.get("/signup", (req, res) => {
    const Username = req.body.newusername;
    const Password = req.body.newpassword;
    let exists = false;
    //first make sure no one is using the same username
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
    var limit = req.query.limit ? req.body.limit : 5
    db.query(
        "SELECT * FROM dailydino ORDER BY date DESC LIMIT ?", [limit],
        (err, result) => {
            if (err) {
                console.log("error");
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

/* generate daily dino (every 10 seconds) */
var CronJob = require('cron').CronJob;
job = new CronJob(
    '*/10 * * * * *',
    generateDailyDino(),
    null,
    true,
    'America/Los_Angeles'
);

async function generateDailyDino() {
    /* limit the new dino was not recently selected */

    console.log('attemp to generate daily dino')
    // db.query(
    //     "SELECT * FROM dailydino LIMIT 5",
    //     (err, result) => var_pastdinos
    // )
    // var past_dinos = await getDailyDino().data
    // past_ids = past_dinos.map(day => {
    //   return day.dinosaur.id
    // })

    // /* select random dino from all */
    // console.log('attemp to generate daily dino')
    // const random_dino = await db.query(
    //   `SELECT id
    //   FROM dinosaurs
    //   WHERE id NOT IN(
    //     SELECT dinosaur_id
    //     FROM dailydinos
    //     LIMIT 5
    //   )
    //   ORDER BY RAND()
    //   LIMIT 1`

    // )


    // date = new Date()
    // db.query(
    //   `INSERT INTO dailydino(date, dinosaur_id) VALUES (${date},${random_dino.id})`
    // )
}

const port = process.env.PORT || 8080;

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});