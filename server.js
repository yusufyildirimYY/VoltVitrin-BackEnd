const express = require("express");
const cors = require("cors");

const { readItems, readBrands } = require("./Database/database");

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
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

app.listen(3000, () => {
  console.log("server is running");
});
