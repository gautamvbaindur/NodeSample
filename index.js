var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});


app.get("/banks", (req, res, next) => {
 res.json(["ANZ","NAB","CBA","Westpac"]);
});