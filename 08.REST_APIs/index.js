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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

let posts = [
    {
        username: "baba01",
        content: "This is my first post",
    },
    {
        username: "sachin",
        content: "I love cricket",
    },
    {
        username: "sourav",
        content: "game is not over yet",
    },
    {
        username: "tanya",
        content: "I Love coding",
    },
    {
        username: "devashish",
        content: "I am a full stack developer",
    },
    
]

app.get("/", (req, res)=>{
    res.render("index.ejs");
})

app.get("/posts", (req, res) =>{
    res.render("posts.ejs", {posts});
})

app.get("/posts/new", (req, res) =>{
    res.render("newPost.ejs");
})

app.post("/posts", (req, res) =>{
    let {username, content} = req.body;
    
    posts.push({username, content});
    res.redirect("/posts");
})

app.get("/posts/:username", (req, res) =>{
    let {username} = req.params;
    let post = posts.find((p) => username === p.username);
    if(post){
        res.render("show.ejs", {post});
    }else{
        res.send("Post not found.");
    }
})




app.listen(PORT, () =>{
    console.log(`server is running on PORT ${PORT}`);
})