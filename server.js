const axios = require("axios");
const express = require("express");
const cors = require("cors");
const PORT = 3001 || process.env.PORT;

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
  //   const website = req.params.website;
  //   axios
  //     .get(website)
  //     .then((response) => {
  //       const html = response.data;
  //       const parser = new DOMParser();
  //       const htmlDoc = parser.parseFromString(html, "text/html");
  //       const title = htmlDoc.querySelector("title").textContent;
  //       res.send(title);
  //       console.log(title);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       res.sendStatus(500);
  //     });
});

app.listen(PORT, () => {
  console.log("listening");
});

//
// 2. получать website из параметров
// 3.
