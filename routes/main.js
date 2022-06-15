//-------------------------these are routes------------------------//
const router = require("express").Router();
const maincontroller = require("../controllers/main");

router.get("/productlist", maincontroller.getproducts);
router.post("/orderslist", maincontroller.getorders);

module.exports = router;
