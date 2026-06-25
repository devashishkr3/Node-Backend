const session = require("express-session");

app.use(

    session({

        secret:"inventory-secret",

        resave:false,

        saveUninitialized:false

    })

);