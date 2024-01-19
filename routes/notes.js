const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const { EOL } = require("os");

router
  .get("/", function (req, res, next) {
    fs.readFile(
      path.join(__dirname, "..", "data", "notes.txt"),
      "utf8",
      (err, data) => {
        if (err) throw err;

        let notes = data.split(EOL);

        notes = notes.map((note, index) => ({
          id: index,
          title: note,
        }));

        res.render("notes", {
          title: "Notes Express App",
          notes: notes,
        });
      },
    );
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
