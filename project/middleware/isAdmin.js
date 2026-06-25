const User = require("../models/User");

const isAdmin = async (req,res,next)=>{

    const user =
    await User.findById(
        req.session.userId
    );

    if(user.role === "admin"){

        next();

    }else{

        return res.send(
            "Access Denied"
        );

    }

}

module.exports = isAdmin;