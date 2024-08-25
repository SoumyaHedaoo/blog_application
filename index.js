const express = require("express");
const {handleConnecton} = require("./connections");
const path= require ("path");
const userRoute = require("./routes/user");
const { displayHomePage} = require("./controllers/handlePageRender");
const app = express();
const PORT = 8000;

handleConnecton("mongodb://127.0.0.1:27017/blog_application").then(console.log("DB connected successfully"));

app.set("view engine" , "ejs");
app.set("views" , path.resolve("./views"));

app.use(express.urlencoded({extended : false}));

app.get("/" , displayHomePage);

app.use("/user" , userRoute);

app.listen(PORT , ()=> console.log(`server stared at PORT : ${PORT}`));


