const express=require("express");
const router=express.Router();
const { getDashBordStats } = require("../controllers/dashboardCntroller");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, getDashBordStats);

module.exports = router;