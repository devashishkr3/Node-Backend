const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;
// const cuid = require('cuid');
// const methodOverride = require('method-override');
const {faker} = require('@faker-js/faker');
const mysql = require("mysql2");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "office_db",
    password: "abcdef@321"
})

// CREATE DATABASE office_db;
// use office_db;
// create table temp(
//     id int primary key
// )


// app.use(methodOverride("_method"));


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

console.log(createRandomUser());









app.listen(PORT, () =>{
    console.log(`server is running on PORT ${PORT}`);
})