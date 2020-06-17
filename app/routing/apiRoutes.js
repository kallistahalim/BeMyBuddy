var path = require("path");
var friends = require("../data/friends");

module.exports = function apiRoutes(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var buddy = req.body;

        buddy.routeName = buddy.name.replace(/\s+/g, "").toLowerCase();

        friends.push(buddy);

        res.json(buddy);
    });
};
