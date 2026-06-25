const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) =>{
    res.send("Hello");
})




router.post("/login",

async(req,res)=>{

    const {
        email,
        password
    } = req.body;

    const user =
    await User.findOne({email});

    if(!user){

        return res.send(
            "Invalid Credentials"
        );
    }

    req.session.userId =
    user._id;

    res.redirect(
        "/admin/dashboard"
    );

});

router.post(

"/add-product",

isLoggedIn,

isAdmin,

async(req,res)=>{

    await Product.create({

        productName:
        req.body.productName,

        category:
        req.body.category,

        price:
        req.body.price,

        stock:
        req.body.stock

    });

    res.redirect(
        "/admin/products"
    );

});

app.listen(8080, () =>{
    console.log("server is running on port 8080");
})