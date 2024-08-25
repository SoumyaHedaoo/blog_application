const {createHmac , randomBytes} = require("node:crypto");

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

 userSchema.pre("save" , function(next){
    const user = this;

    if(!user.isModified("password")) return;

    const salt = randomBytes(16).toString();
    const incryptedPassword = createHmac("sha256" , salt)
        .update(user.password)
        .digest("hex");

    this.salt=salt;
    this.password=incryptedPassword;

    next();
 });

const User = model("user" , userSchema);


module.exports = User;
