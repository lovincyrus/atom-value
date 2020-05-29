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
    const parsed = data.result.map(b => ({
      total_supply: b.amount / 1000000
    }))
    res.send(JSON.stringify(parsed));
  } catch {
    data = null;
    res.sendStatus(404);
  }
});


module.exports = router;