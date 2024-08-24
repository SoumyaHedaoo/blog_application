const express = require("express");

const {displayLoginPage , displaySignupPage} =require("../controllers/handlePageRender");
const router =express.Router();

router.get("/signup" , displaySignupPage);

router.get("/login" , displayLoginPage);

router.post("/login" , handleLogin);

router.post("/signup" , handleSignup);


module.exports = router;




