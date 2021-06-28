const express = require('express');
const router = express.Router();
const YoutubeIntegration = require('../integrations/YoutubeIntegration');

const youtubeIntegration = new YoutubeIntegration();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Playlist Generator' });
});

router.get('/ping', function(req, res, next) {
  res.send('pong');
});

router.post('/youtube', function(req, res, next) {
  youtubeIntegration.searchTerm(req.body.searchterm, res);
});

module.exports = router;
