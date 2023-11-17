var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
  fetch(
    'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt',
    { headers: { 'Conent-Type': 'text/plain' } }
  )
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      res.send(data);
    });
});
module.exports = router;
