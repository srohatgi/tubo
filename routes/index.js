var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  var subject = req.query.subject;
  console.log("subject = " + subject);
  if (!subject) {
    subject = 'polynomials';
  }

  res.render('index', { 
      app_title: 'Tubo',
      title: `Notes for ${subject}`,
      cheatsheet: subject
  });
});

module.exports = router;
