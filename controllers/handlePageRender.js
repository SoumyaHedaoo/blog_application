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

const handleRenderBlog = async(req , res) =>{
    const blog = await Blog.findById(req.params.id).populate("createdBy");

    return res.render('blog' , {user : req.user , blog});
}

module.exports = {
    displayLoginPage,
    displaySignupPage,
    displayHomePage,
    handleRenderBlog
};