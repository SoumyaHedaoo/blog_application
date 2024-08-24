const {Schema , model} =require("mongoose");

const userSchema = new Schema({
    fullname : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    salt:{
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    role :{
        type : String,
        enum : ["USER" , "ADMIN"],
        default : "USER",
    },
    userImage : {
        type : String,
        default: "./public/default_mage.png",

    }
},{
    timestamps : true,
});


const User = model("user" , userSchema);


module.exports = {
    User
};