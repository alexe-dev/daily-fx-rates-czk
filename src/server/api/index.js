const app = require('express')();
const cors = require('cors');

app.use(cors());

app.get('/api', function (req, res, next) {
  fetch(
    'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt',
    { headers: { 'Conent-Type': 'text/plain' } }
  )
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      res.setHeader('Content-Type', 'text/html');
      res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
      res.send(data);
    });
});

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
