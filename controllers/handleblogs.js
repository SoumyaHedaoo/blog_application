const Blog = require("../models/blog");
const CreateNewBlog = (req , res)=>{
    return res.render("addblog" ,{ user : req.user});
}

const handleSubmitBlog = async(req , res) => {
    const{title , body} = req.body;
    const blog = await Blog.create({
        body,
        title,
        createdBy : req.user._id,
        thumbnailImage : `uploads/${req.file.filename}`
    });
    return res.redirect(`/blog/${blog._id}`);
}

module.exports = {
    CreateNewBlog,
    handleSubmitBlog
}