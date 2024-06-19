const express = require("express");
const path = require("path");

const storyRouter = require("./routes/dice_story");
const battleOverviewRouter = require("./routes/dice_battle_overview");
const battleStatusConditionsRouter = require("./routes/dice_battle_status_conditions");
const battleTeamAttacksRouter = require("./routes/dice_battle_team_attacks");
const charactersRouter = require("./routes/dice_characters");
const frontPageRouter = require("./routes/dice_front_page");


const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.use("/dice_battle_overview", battleOverviewRouter);
app.use("/dice_battle_status_conditions", battleStatusConditionsRouter);
app.use("/dice_battle_team_attacks", battleTeamAttacksRouter);
app.use("/dice_characters", charactersRouter);
app.use("/", frontPageRouter);
app.use("/dice_story", storyRouter);

module.exports = app;