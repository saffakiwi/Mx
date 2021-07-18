const express = require('express');
const mysql = require("mysql2");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());



const db = mysql.createConnection({
    host: 'database-123.cwr9dzf6bvdb.ap-southeast-2.rds.amazonaws.com',
    user: 'admin',
    password: 'M1ssionReady',
    database: "missionx",
});
db.connect(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("connect to db")
    }
})

app.get("/user", function (req, res) {
    db.query("SELECT *FROM users WHERE user_id=2",(err, result) => {
        res.send(result)
    } )

// app.get("/user", function (req, res) {
//     db.query("SELECT *FROM users WHERE user_id=2",(err, result) => {
// })
// app.get("/users", function (req, res) {
//     var sql = "SELECT *FROM users  WHERE user_id=2" +req.query.user_id

//     db.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");

//     db.query(sql, function (err, result) {
//         if (err) throw err;
//       res.write(result);
//     });


// })

});
app.listen(4000);


// const state={
//     school: "Homai",
//     course: "Begginer",
//     date_of_birth: "28-04-2010",
//     contact_number:"022 857 3845",
//     email: "aidena@homai.edu"
// },