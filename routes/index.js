const express = require('express');
const router = express.Router();

const placeDirectoryRouter = require('./place/index');

router.use('/place', placeDirectoryRouter);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;