const express = require("express");
const app = express();
const path = require('path');
const PORT = 8080;
const mysql = require("mysql2");
const faker = require("@faker-js/faker");
require('dotenv').config();

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const connection = mysql.createConnection({
    user:process.env.DB_USER,
    password: process.env.DB_PASS,
    host:process.env.DB_HOST,
    database:process.env.DB_NAME
})

let query = 'INSERT INTO user(id, username, name, bio, post, followers, following, profilePic) VALUES (?,?,?,?,?,?,?,?)';
const userData = [
  [
    "usr_94a2b1c3",
    "alex_dev99",
    "Alex Rivera",
    "Full stack developer | Building open source tools | Coffee enthusiast ☕",
    142,
    12500,
    482,
    "https://unsplash.com"
  ],
  [
    "usr_3f8e7d21",
    "wanderlust_sam",
    "Samantha Chen",
    "Travel photographer 📸 | 24 countries and counting | Next stop: Tokyo 🇯🇵",
    389,
    45200,
    891,
    "https://unsplash.com"
  ],
  [
    "usr_7c2b6a54",
    "chef_marcus",
    "Marcus Dupont",
    "Michelin star chef | Pastry lover | Sharing daily recipes and kitchen hacks",
    64,
    8900,
    156,
    "https://unsplash.com"
  ],
  [
    "usr_1e5d9c8b",
    "fit_with_elena",
    "Elena Rostova",
    "Certified personal trainer 💪 | Online coaching available | Mindset & Movement",
    512,
    104300,
    620,
    "https://unsplash.com"
  ],
  [
    "usr_6b4a8e32",
    "pixel_art_design",
    "Liam O'Connor",
    "UI/UX Designer | Clean interfaces & micro-animations | Open for freelance 🎨",
    93,
    3400,
    1105,
    "https://unsplash.com"
  ]
];


for(let user of userData){
    connection.query(query, user, (err, result) =>{
    if(err) throw err;
    console.log(result);
});
}

let showData = 'SELECT * from user';
connection.query(showData, (err, result) =>{
    if(err) throw err;
    console.log(result);
})




app.listen(PORT, () =>{
    console.log(`Server is running on PORT ${PORT}`);
});