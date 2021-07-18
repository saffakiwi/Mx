const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const app = express()
app.use(cors())

// ----- If need to get data from database missionx------
const db = mysql.createConnection({
  host: "database-123.cwr9dzf6bvdb.ap-southeast-2.rds.amazonaws.com",
  user: "admin",
  password: "M1ssionReady",
  database: "missionx",
})

db.connect(function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log("Connected to database")
  }
})

// Amazon DB
// host: 'database-123.cwr9dzf6bvdb.ap-southeast-2.rds.amazonaws.com',
//  user: 'admin',
//  password:'M1ssionReady',
//  database: "missionx",

app.get("/", function (req, res) {
  //--------If need to get data from database missionx----------
  db.query(
    "SELECT user_id,first_name,last_name,profile_pic FROM users WHERE role='student'",
    function (err, result) {
      res.send(result)
    }
  )
})

app.listen(3001)
