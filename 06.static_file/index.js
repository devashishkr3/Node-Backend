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


// Home Page
app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.post("/api/login", (req, res) =>{
    let {username , password} = req.body;
    console.log(username, password);

    res.send(`Standard Post response.
        Welcome ${username}`);
})

// About Page
app.get("/about", (req, res) => {
    res.render("about.ejs");
});

// Help Page
app.get("/help", (req, res) => {
    res.render("help.ejs");
});

// Contact Page
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

// Services Page
app.get("/services", (req, res) => {
    res.render("service.ejs");
});

// Privacy Page
app.get("/privacy", (req, res) => {
    res.render("privacy.ejs");
});

// Not Found Page
app.use((req,res)=>{
    res.status(404).render("notFound.ejs");
})


app.listen(PORT, () =>{
    console.log(`server is running on PORT ${PORT}`);
})