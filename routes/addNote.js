const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const { EOL } = require("os");

router
    .get("/", function (req, res, next) {
        res.render("addNote", {
            title: "Notes Express App",
        });
    })
    .post("/", function (req, res) {
        res.send("POST /add-note");
    });

module.exports = router;
