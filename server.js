const axios = require("axios");
const express = require("express");
const cors = require("cors");
// const PORT = 3001 || process.env.PORT;
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());

app.get("/getTitle", (req, res) => {
  const { website } = req.query;
  axios
    .get(website)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "No such website" });
    });
});

app.get("/getProducts", (req, res) => {
  // console.log("getprod");
  // res.json({ test: "Test" });
  const filePath = path.join(__dirname, "products.json");
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error reading products file" });
      return;
    }
    const products = JSON.parse(data);
    res.json(products);
  });
});

app.listen(PORT, () => {
  console.log("listening", PORT);
});
