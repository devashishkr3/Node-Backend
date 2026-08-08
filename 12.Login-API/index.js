const express = require("express");
const app = express();
const PORT = 8080;
const mysql = require("mysql2");
require("dotenv").config();
const cuid = require("cuid");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public")));

const connection = mysql.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
});

// api for signup/register
app.post("/signup", (req, res) => {
  // data from frontend
  const { name, email, password, dob } = req.body;
  // generate unique id for user
  let id = cuid();
  // query to insert user data into database
  let registerQuery =
    "INSERT INTO user(id, name, email, password, dob) VALUES(?,?,?,?,?)";
    // array of user data to be inserted into database
  let userArr = [id, name, email, password, dob];

  try {
    connection.query(registerQuery, userArr, (err, result) => {
      if (err){
        return res.status(500).json({
          error: "Database Error",
          success: false
        });
      };

      res.status(201).json({
      message: "User Registered Successfully.",
      success: true,
    });
    });

    
  } catch (error) {
    return res.status(500).json({
      error: "Internal server error",
      success: false,
    });
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  let loginQuery = `SELECT * FROM user WHERE email=?`;
  // let existUserArr = [];

  connection.query(loginQuery, email, (err, result) => {
    if (err) {
      return res.status(500).json({
        error: err,
        success: false,
      });
    }

    if (result.length == 0 || !result) {
      return res.status(404).json({
        message: "User not found with this email Please Login first.",
        success: true,
      });
    }

    let existUser = result[0];
    if (existUser.password == password) {
      return res.status(200).json({
        message: "Login Successful.",
        success: true,
      });
    }

    if (existUser.password != password) {
      return res.status(400).json({
        message: "Invalid Credentials.",
        success: false,
      });
    }
  });
});

// api for login - POST method

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
