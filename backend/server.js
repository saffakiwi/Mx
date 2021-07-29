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

app.get("/users", function (req, res) {
  //--------If need to get data from database missionx----------
  db.query(
    "SELECT user_id,first_name,last_name,profile_pic FROM users WHERE role='student'",
    function (err, result) {
      console.log(result)
      res.send(result)
    })
});


// for profile viewer 
app.post('/getUser', function (req, res) {
  db.query(`SELECT users.user_id, users.profile_pic, users.first_name, users.last_name, CONCAT(users1.first_name, " ", users1.last_name) AS teacher_name, project.course, users.school, users.date_of_birth, users.contact_number, users.email
  FROM users
  JOIN progress_history ON users.user_id = progress_history.user_id
  JOIN project ON progress_history.project_id = project.project_id
  JOIN users AS users1 ON users.teacher_id = users1.user_id
  WHERE users.user_id=?`, [req.body.user_id], (err, result) => {
      res.send(result)
      console.log(result)
    })
})

app.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  db.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], function(err, result) {
  if (err) {
  console.log(err)
  } else {
  if (result.length > 0) {
  console.log("Check Successful")
  res.status(200).send(result)
  } else {
  console.log("Check Unsuccessful")
  res.sendStatus(401)
  }
  }
  })
  })

  app.get('/teachers', (req, res) => {
    const teacher = req.body.role
    db.query("SELECT * FROM users WHERE role = 'teacher'", [teacher], function(err, result) {
      console.log(err)    
      res.send(result)
    })
});

app.get('/progress_history', (req, res) => {
  db.query("SELECT users.user_id, users.profile_pic, users.first_name, progress_history.date_submitted, progress_history.submission FROM progress_history JOIN users ON progress_history.user_id = users.user_id WHERE submission IS NOT NULL", function(err, result) {
    console.log(err)  
    res.send(result)
  })
});

app.get('/help_requests', (req, res) => {
  db.query("SELECT users.user_id, users.profile_pic, users.first_name, help_requests.date_created, help_requests.done FROM help_requests JOIN users ON help_requests.user_id = users.user_id WHERE done IS NULL", function(err, result) {
    console.log(err)  
    console.log(res.data)
    res.send(result)
  })
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const done = req.body.done;
  console.log(id)
  db.query(

      "UPDATE help_requests SET done = ? WHERE id = ?",
      [id, done],
      (err, result) => {
          if (err) {
              console.log(err)
          } else {
              res.send(result)
          }
      }
  )
})

app.listen(4005)

