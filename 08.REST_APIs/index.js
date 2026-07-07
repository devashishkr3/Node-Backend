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


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(methodOverride("_method"));

let posts = [
    {
        username: "baba01",
        content: "This is my first post",
        id: "10001",
    },
    {
        username: "sachin",
        content: "I love cricket",
        id: "10002",
    },
    {
        username: "sourav",
        content: "game is not over yet",
        id: "10003",
    },
    {
        username: "tanya",
        content: "I Love coding",
        id: "10004",
    },
    {
        username: "devashish",
        content: "I am a full stack developer",
        id: "10005",
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

    let id = cuid();
    
    posts.push({username, content, id});
    res.redirect("/posts");
})

app.get("/posts/:id", (req, res) =>{
    let {id} = req.params;
    // console.log(id);
    let post = posts.find((p) => p.id === id);
    // console.log(post);
    if(post){
        res.render("show.ejs", {post});
    }else{
        res.send("Post not found.");
    }
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




app.listen(PORT, () =>{
    console.log(`server is running on PORT ${PORT}`);
})