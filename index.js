const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt =require('bcrypt')

const app = express();
app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    host: 'database-123.cwr9dzf6bvdb.ap-southeast-2.rds.amazonaws.com',
    user: 'admin',
    password: 'M1ssionReady',
    database: "missionx",
})

db.connect(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("connected to database")
    }
});

app.get('/teachers', (req, res) => {
    db.query("SELECT users.user_id, users.profile_pic, users.first_name, users.teacher_id FROM users WHERE teacher_id IS NULL", (err, result) => {
        res.send(result)
    })
});

app.get('/progress_history', (req, res) => {
    db.query("SELECT users.user_id, users.profile_pic, users.first_name, progress_history.date_submitted, progress_history.submission FROM progress_history JOIN users ON progress_history.user_id = users.user_id WHERE submission IS NOT NULL", (err, result) => {
        res.send(result)
    })
});

app.get('/help_requests', (req, res) => {
    db.query("SELECT users.user_id, users.profile_pic, users.first_name, help_requests.date_created, help_requests.done FROM help_requests JOIN users ON help_requests.user_id = users.user_id WHERE done IS NULL", (err, result) => {
        res.send(result)
    })
});

app.post('/login', (req, res) => {
    const plainPass = req.body.password

    db.query("SELECT * FROM users WHERE email = ?", [req.body.email], function(err, result) {
        if (err) {
            console.log(err)
        } else {
            if (result.length > 0){
                const passwordCheck = bcrypt.compareSync(plainPass, result[0].password)
                if (passwordCheck) {
                    console.log("Check Successful")
                    res.sendStatus(200)
                } else {
                    console.log("Check Unsuccessful")
                    res.sendStatus(401)
                } 
            }
        }
    })
})

app.post('/signup', (req,res) => {
    const hashedPass = brcypt.hashSync(req.body.password, 10)

    db.query("INSERT INTO users SET ?", {email: req.body.email, password: hashedPass}, function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log("Successful Signup")
            res.sendStatus(201)
        }
    })
})

app.get('/users', (req,res) => {
    db.query("SELECT * FROM users", (err, result) => {
        res.send(result)
    })
})

app.listen(4000)