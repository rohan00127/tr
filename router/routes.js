const express = require("express");
const router = express.Router();
const products = require("../controller/productscontroller")


router.route("/").get(products.getproduct);


module.exports = router;
