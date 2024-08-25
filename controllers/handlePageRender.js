
const displaySignupPage = (req , res)=>{
    return res.render("signup");
}

const displayLoginPage=(req , res)=>{
    return res.render("login");
}

const displayHomePage = (req , res) =>{
    return res.render("home");
}


module.exports = {
    displayLoginPage,
    displaySignupPage,
    displayHomePage
};