const express = require("express");

const {handleUserSignup , handleUserLogin} = require("../controllers/handleUser.js")
const {displayLoginPage , displaySignupPage} =require("../controllers/handlePageRender");

const router =express.Router();

router.get("/signup" , displaySignupPage);

router.get("/login" , displayLoginPage);

router.post("/login" , handleUserLogin);

router.post("/signup" , handleUserSignup);


module.exports = router;



