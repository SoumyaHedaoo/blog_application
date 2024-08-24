const express = require("express");
const path= require ("path");
const userRoute = require("./routes/user");
const { displayHomePage} = require("./controllers/handlePageRender");
const app = express();
const PORT = 8000;

app.set("view engine" , "ejs");
app.set("views" , path.resolve("./views"));

app.get("/" , displayHomePage);

app.use("/user" , userRoute);

app.listen(PORT , ()=> console.log(`server stared at PORT : ${PORT}`));


