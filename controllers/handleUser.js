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
    try {
        const token= await User.matchPassword(email , password);
        console.log(token);
        return res.cookie("token" , token).redirect("/");
    } catch (error) {
        return res.render("login" , {error : "incorrect credentials"});
    }
   
    
}

module.exports = {
    handleUserSignup,
    handleUserLogin
};