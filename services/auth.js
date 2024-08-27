const jwt = require("jsonwebtoken");
const secret = "It's_seCretE@!23";

const createTokenForUser=(User)=>{
    const payload = {
        _id : User._id,
        fullname : User.fullname,
        email : User.email,
        profileImage : User.userImage,
        role : User.role,
    };

    const token =jwt.sign(payload , secret);
    return token;
}

const verifyToken=(token)=>{
    const payload = jwt.verify(token , secret);
    return payload;
}


module.exports = {
    createTokenForUser,
    verifyToken
};
