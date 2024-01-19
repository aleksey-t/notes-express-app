const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const { EOL } = require("os");

router
    .get("/:id", function (req, res, next) {
        res.render("notes", {
            title: "Notes Express App",
            notes: [],
        });
    })
    .post("/", function (req, res) {
        res.send("POST /notes");
    })
    .put("/", function (req, res) {
        res.send("PUT /notes");
    })
    .delete("/", function (req, res) {
        res.send("DELETE /notes");
    });

module.exports = router;
