const express = require('express');
const router = express.Router();
const YoutubeIntegration = require('../integrations/YoutubeIntegration');

const youtubeIntegration = new YoutubeIntegration();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Playlist Generator' });
});

router.post('/youtube', function(req, res, next) {

  youtubeIntegration.searchTerm(req.body.searchterm);
  res.send("jackie, do you know where your children are?");
});


module.exports = router;
