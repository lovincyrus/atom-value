const fetch = require('node-fetch');

const getData = async () => {
	const response = await fetch('https://api.cosmos.network/supply/total');
  const parsed = await response.json();

  const final = parsed.result
    .map(b => ({
      total_supply: b.amount / 1000000
    }))

  return final
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  let data = await getData();

  res.end(JSON.stringify(data));
};