const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const eventify = require("../dist/lib");

let app = express();

app = eventify(app);

app.use(morgan("combined"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/json"}));

app.$on({
    get: {
        "/test-1": function(req, res) {
            res.json({ message: "json test 1" });
        }
    },
    post: {
        "/test-1": function(req, res) {
            res.send(`[test-1]: ${req.body.text}`);
        }
    }
});

app.$on("get!/test-2", (req, res) => res.json({message: "json test 2"}));

app.$on("post!/test-2", (req, res) => res.send(`[test-2]: ${req.body.text}`));

const port = 7357;

app.listen(port);
console.log(`Listening on port ${port}`);

module.exports = app;