const express = require("express");
const cors = require("cors");
var timeout = require("connect-timeout");

const { readItems, readBrands } = require("./Database/database");

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", timeout("60s"), (req, res) => {
  const type = req.query.type;
  switch (type) {
    case "all":
      readItems((err, rows) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(rows);
        }
      });
      break;
    case "brands":
      readBrands((err, rows) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(rows);
        }
      });
      break;
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server is running");
});
