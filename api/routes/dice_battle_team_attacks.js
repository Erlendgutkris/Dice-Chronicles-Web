const express = require("express");
const router = express.Router();
const https = require("https");
const path = require("path");
const fs = require("fs");

router.get("/", function (req, res, next){
    var jsonFilePath = 'api/public/jsons/attacks.json';

    fs.readFile(jsonFilePath, 'utf8', function(err, data) {
      if (err) {
        console.error('Error reading JSON file:', err);
        return res.status(500).send('Error reading JSON file');
      }
  
      var attackList = JSON.parse(data);
    res.render("dice_battle_team_attacks", {attacks: attackList});
});
});

module.exports = router;