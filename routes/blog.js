const { Router} = require("express");
const multer = require("multer");
const path= require ("path");

const {CreateNewBlog , handleSubmitBlog} = require("../controllers/handleblogs")
const router = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(`./public/uploads/`));
    },
    filename: function (req, file, cb) {
        const filename = `${Date.now()}-${file.originalname}`;
        cb(null , filename);
    }
  });

  const upload = multer({ storage: storage });

router.get("/add-new" , CreateNewBlog);

router.post('/' ,upload.single("thumbnailImage") ,handleSubmitBlog);

module.exports = router;