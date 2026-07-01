const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;
const data = require("./data.json");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) =>{
    
    res.render("home.ejs");
})


app.get("/ig/:username", (req, res) => {

    const { username } = req.params;

    // Find user
    const user = data.find((u) => u.username === username);

    if (user) {
        res.render("about", { user });
    } else {
        res.send("<h1>User Not Found 😢</h1>");
    }

});

// app.get("/ig/:username", (req, res) =>{
//     const {username} = req.params;
//     console.log(username);
//     if(rahul){
//         res.render("about.ejs", {username});
//     }
//     else{
//         res.send("User Not found");
//     }
    
// })

app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`);
})