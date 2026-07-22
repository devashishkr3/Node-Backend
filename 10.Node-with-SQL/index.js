const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;
const {faker} = require('@faker-js/faker');
const mysql = require("mysql2");
require("dotenv").config();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const connection = mysql.createConnection({
    host: process.env.DB_HOST ,
    user: process.env.DB_USER ,
    database: process.env.DB_DATABASE ,
    password: process.env.DB_PASSWORD
});


function createRandomUser(){
    return{
        userId: faker.string.uuid(),
        username: faker.internet.username(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        dob: faker.date.birthdate(),
        registeredAt: faker.date.past()

    }
}

// console.log(createRandomUser());

// checking data 
connection.query(
    "SELECT count(*) FROM user"
    , (err, result) =>{
    if(err) throw err;

    console.log("before insert data : ", result);
})

function saveUser() {
    // array of fake user -> faker wala function se array me humlog data daal rahe hai 
    let newUser = [createRandomUser().userId, createRandomUser().username, createRandomUser().email, createRandomUser().avatar, createRandomUser().password, createRandomUser().dob, createRandomUser().registeredAt];
    console.log("new User: ",newUser);
    // query for insert data in database
    const insertQuery = 'INSERT INTO user(userId, username, email, avatar, password, DOB, registeredAt) VALUES(?, ?, ?, ?, ?, ?, ?)';

    connection.query(insertQuery, newUser , (err, result) =>{
        if(err) throw err;

        console.log(result);
    })
}

saveUser();
// checking data after 
connection.query(
    "SELECT count(*) FROM user"
    , (err, result) =>{
    if(err) throw err;

    console.log("after data save: ", result);
})

connection.end();



app.listen(PORT, () =>{
    console.log(`server is running on PORT ${PORT}`);
})