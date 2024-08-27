const { verifyToken } = require("../services/auth");

const checkAuthenticationCookie=(cookieName)=>{
    return (req , res , next)=>{
        const tokenCookieValue = req.cookies[cookieName];
        if(!tokenCookieValue){
            return next();
        }

        try {
            const payload = verifyToken(tokenCookieValue);
            req.user=payload;
        } catch (error) {
            
        }
        return next();
    }
    
}

module.exports = {
    checkAuthenticationCookie,
};