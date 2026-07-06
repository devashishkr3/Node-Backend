const express = require('express');

const app = express();

app.get("/hello", (req,res) =>{
    res.send("Hello");
})

app.get("/search", (req, res) =>{
    let {name} = req.query
    console.log(req.query);
    res.send(`you searched for ${name}`)
})

let user = [
    {
        username : "dev",
        profile : "jaosjfoisl",
        
    },
    {

    }


]

app.get("/ig/:username", (req, res) =>{
    let {username} = req.params;
    // console.log(username);

    res.send(`Hello ${username}`);
})



app.get("/" , (req, res) =>{
    res.send("Hello From Home");
})

app.use((req, res) =>{
    // console.log("Incoming Request");
    res.send(`
        <div style="
        text-align:center;
        color:white;
    ">

        <h1 style="
            font-size:120px;
            margin:0;
            color:#38bdf8;
        ">
            404
        </h1>

        <h2 style="
            margin:10px 0;
            font-size:35px;
            color:red;
        ">
            Page Not Found
        </h2>

        <p style="
            color:#cbd5e1;
            font-size:18px;
            margin-bottom:30px;
        ">
            Oops! The page you're looking for doesn't exist.
        </p>

        <a href="/"
           style="
           text-decoration:none;
           background:#38bdf8;
           color:white;
           padding:12px 25px;
           border-radius:8px;
           font-size:16px;
           font-weight:bold;
        ">
            Go Back Home
        </a>

    </div>
        `);
})

app.listen(8080, () =>{
    console.log("Server is running on port 8080");
})