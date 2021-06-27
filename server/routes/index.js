const express = require('express');
const router = express.Router();
const YoutubeIntegration = require('../integrations/YoutubeIntegration');

const youtubeIntegration = new YoutubeIntegration();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/youtube', function(req, res, next) {

});

module.exports = router;
