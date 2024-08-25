const User = require("../models/user");

const handleUserSignup = async (req , res)=>{
    const{fullname , email , password}=req.body;
    if(!fullname || !email || !password) return res.redirect("/user/signup");
    await User.create({
        fullname,
        email,
        password,
    });
    return res.redirect("/");
}

const handleuserSignup = async(req , res)=>{
    const{email , password} = req.body;
    
}

module.exports = {
    handleUserSignup
};