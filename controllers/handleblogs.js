
const CreateNewBlog = (req , res)=>{
    return res.render("addblog" ,{ user : req.user});
}

const handleSubmitBlog = (req , res) => {
    console.log(req.body);
    return res.redirect('/');
}

module.exports = {
    CreateNewBlog,
    handleSubmitBlog
}