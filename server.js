const axios = require("axios");
const express = require("express");
const cors = require("cors");
// const PORT = 3001 || process.env.PORT;

const app = express();
app.use(cors());

app.get("/getTitle", (req, res) => {
  const { website } = req.query;
  const options = {
    method: "GET",
    url: website,
  };
  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// app.listen(PORT, () => {
//   console.log("listening");
// });
