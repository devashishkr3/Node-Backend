const express = require("express");
const app = express();
const PORT = 8080;
const mysql = require("mysql2");
require('dotenv').config();
const cuid = require("cuid");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const connection = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME
});

// api for signup/register
app.post("/signup", (req, res) =>{
    const {name, email, password, dob} = req.body;
    let id = cuid();
    let registerQuery = 'INSERT INTO user(id, name, email, password, dob) VALUES(?,?,?,?,?)';
    let userArr = [id, name, email, password, dob];

    try {
        connection.query(registerQuery, userArr, (err, result) =>{
        if(err) throw err;
        console.log(result);
    })

    res.status(201).json({
        message : "User Registered Successfully.",
        success: true,
    })


    } catch (error) {
        return res.status(500).json({
            error: "Internal server error",
            success: false,
        })
    }
})

// app.post("/login", (req, res) =>{
//     const {email, password} = req.body;
    
//     let loginQuery = `SELECT * FROM user WHERE email=?`;
//     let existUserArr;

//     connection.query(loginQuery,email, (err, result)=>{
//         if(err) throw err;
//         console.log(result);
//         existUserArr = result;
//     })
//     let existUser = existUserArr[0];
//     if(existUser.password == password){
//         return res.status(200).json({
//             message: "Login Successful.",
//             success: true
//         })
//     }
// })

// api for login - POST method 

app.listen(PORT, () =>{
    console.log(`Server is running on PORT ${PORT}`);
});

