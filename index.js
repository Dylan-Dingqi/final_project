const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
app.set('view engine','ejs');
app.engine('html', ejs.renderFile);

app.set("view engine", ejs);
app.get("/", (req, res) => {
    res.render("index.html");
});
app.get("/*", (req, res) => {
    res.status(404).send("not found");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Listening on port " + port + "...");
});