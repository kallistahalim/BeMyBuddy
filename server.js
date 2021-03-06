var express = require("express");
var path = require("path");

var app = express();
var PORT = 7000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});