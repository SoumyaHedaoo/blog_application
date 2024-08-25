const mongoose = require("mongoose");


const handleConnecton =async(url)=>{
    return await mongoose.connect(url);
}

module.exports ={
    handleConnecton
}