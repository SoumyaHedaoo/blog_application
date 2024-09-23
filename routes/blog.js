const { Router} = require("express");
const {CreateNewBlog , handleSubmitBlog} = require("../controllers/handleblogs")
const router = Router();

router.get("/add-new" , CreateNewBlog);

router.post('/' , handleSubmitBlog);

module.exports = router;