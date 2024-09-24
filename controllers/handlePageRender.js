const Blog = require("../models/blog");
const displaySignupPage = (req , res)=>{
    return res.render("signup");
}

const displayLoginPage=(req , res)=>{
    return res.render("login");
}

const displayHomePage = async(req , res) =>{
    const allBlogs = await Blog.find({});
    return res.render("home" , {user : req.user , blogs : allBlogs});
}


module.exports = {
    displayLoginPage,
    displaySignupPage,
    displayHomePage
};