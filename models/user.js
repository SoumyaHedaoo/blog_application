const {createHmac , randomBytes} = require("node:crypto");

const {Schema , model} =require("mongoose");
const { createTokenForUser } = require("../services/auth");

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
        default: "/images/default.png",
    }
},{
    timestamps : true,
});

 userSchema.pre("save" , async function(next){
    const user =await this;

    if(!user.isModified("password")) return;

    const salt = randomBytes(16).toString();
    const incryptedPassword = createHmac("sha256" , salt)
        .update(user.password)
        .digest("hex");

    this.salt=salt;
    this.password=incryptedPassword;

    next();
 });

  userSchema.static("matchPassword" , async function(email , password){
    const user=await this.findOne({email});
    if(!user) throw new Error('User not found');
    
    const correctPassword=user.password;

    const incryptedPassword = createHmac("sha256" , user.salt)
        .update(password)
        .digest("hex");

    if(correctPassword !== incryptedPassword) throw new Error('Incorrect passowrd');

    const token = createTokenForUser(user);
    return token;

  });

const User = model("user" , userSchema);


module.exports = User;
