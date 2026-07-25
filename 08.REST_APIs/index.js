// REST :- Representational State Transfer


// CRUD :- (CREATE, READ, UPDATE, DELETE) IN DB
//  CREATE : POST METHOD 
//  READ : GET METHOD
//  UPDATE : PUT/PATCH METHOD
//  DELETE : DELETE METHOD

// GET retrives resources.
// POST submits new data to the server.
// PUT updated existing data.
// PATCH update existing data partially.
// DELETE removes data.

// GET /posts, sends data(READ). /admissions
// POST /posts, Receive data(Create)
// GET /posts/:id 
// PATCH /posts/:id
// DELETE /posts/:id

const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;
const cuid = require('cuid');
const methodOverride = require('method-override');
const mysql = require("mysql2");
require("dotenv").config();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(methodOverride("_method"));

const connection = mysql.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
});

app.get("/", (req, res)=>{
    res.render("index.ejs");
})

app.get("/posts", (req, res) =>{

    let getQuery = 'SELECT * FROM posts'
    let posts = []

    connection.query(getQuery, (err, result) =>{
        if(err){
            return res.status(500).json({
                message: "Database Error",
            })
        }
        posts = result;
        res.render("posts.ejs", {posts});

    })

    
})

app.get("/posts/new", (req, res) =>{
    res.render("newPost.ejs");
})

app.post("/posts", (req, res) =>{
    let {username, content} = req.body;

    let id = cuid();

    let addQuery = 'INSERT INTO posts(id, username, content) VALUES(?,?,?)'
    let newPost = [id, username, content];

    connection.query(addQuery, newPost, (err, result) =>{
        if(err){
            return res.status(500).json({
                message: "Database Error",
                error: err
            })
        }
        res.redirect("/posts");
    })
})

app.get("/posts/:id", (req, res) =>{
    let {id} = req.params;

    let getByIdQuery = 'SELECT * FROM posts WHERE id=?'
    
    connection.query(getByIdQuery, id, (err, result) =>{
        if(err){
            return res.status(500).json({
                message: "Database Error",
                error: err
            })
        }

        if(result){
            let post = result[0];
            res.render("show.ejs", {post});
        }else{
            res.send("Post not found.");
        }
    })
    
    
})

app.patch("/posts/:id", (req, res) =>{
    let {id} = req.params;
    let {content} = req.body;

    let post = posts.find((p) => p.id === id);

    post.content = content;
    res.redirect("/posts");
})

app.get("/posts/:id/edit", (req, res) =>{
    let {id} = req.params;
    let post = posts.find((p) => p.id === id);

    res.render("edit.ejs", {post});
})

app.delete("/posts/:id", (req, res) =>{
    let {id} = req.params;

    posts = posts.filter((p) => p.id !== id);

    res.redirect("/posts");
})



app.listen(PORT, () =>{
    console.log(`server is running on PORT ${PORT}`);
})