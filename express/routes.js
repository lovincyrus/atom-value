const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ api: "ok" });
});

router.get("/supply", async (req, res) => {
  console.log("--- TOTAL SUPPLY ---");
  let data;
  try {
    data = (await axios.get(`https://api.cosmos.network/supply/total`)).data;
    const parsed = data.result.map(b => (b.amount / 1000000))
    const totalSupply = Number(parsed)
    res.send(JSON.stringify(totalSupply));
  } catch {
    data = null;
    res.sendStatus(404);
  }
});


module.exports = router;