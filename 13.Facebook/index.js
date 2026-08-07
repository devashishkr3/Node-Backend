const express = require("express");
const app = express();
const PORT = 8080;
const path = require("path");
const {loginController, signupController} = require("./controllers/auth.controller.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public")));


app.post("/signup", signupController);
app.post("/login", loginController);

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});

