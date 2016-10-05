var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const subject = 'algebra-1';
  res.render('index', { 
      app_title: 'Tubo',
      title: `Notes for ${subject}`,
      cheatsheet: subject
  });
});

module.exports = router;
