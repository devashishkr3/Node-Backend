const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


app.get("/", (req, res) =>{
    res.render("home.ejs");
})

app.get("/ig/:username", (req, res) =>{
    const {username} = req.params;
    console.log(username);
    res.render("about.ejs", {username});
})

app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`);
})