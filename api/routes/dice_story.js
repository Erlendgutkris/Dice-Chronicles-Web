const express = require("express");
const router = express.Router();
const https = require("https");
const path = require("path");
const fs = require("fs");

router.get("/", function (req, res, next){
    res.render("dice_story")
})

module.exports = router;