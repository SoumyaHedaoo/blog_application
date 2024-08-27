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

const handleUserLogin = async(req , res)=>{
    const{email , password} = req.body;
    
    const user= await User.matchPassword(email , password);
    return res.redirect("/");
}

module.exports = {
    handleUserSignup,
    handleUserLogin
};