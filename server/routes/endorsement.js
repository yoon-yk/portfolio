var express = require('express');
var router = express.Router();

var Endorsement = require('../models/endorsement');

/* GET home page. */
router.get('/', function(req, res, next) {
  return Endorsement
          .find({})
          .sort({regdate: -1})
          .then((endorsements) => res.send(endorsements));
});

router.post('/', function(req, res, next) {
  const endorsement = Endorsement();
  const name = req.body.name;
  const title = req.body.title;
  const relationship = req.body.relationship;
  const content = req.body.content;

  endorsement.name = name;
  endorsement.title = title;
  endorsement.relationship = relationship;
  endorsement.content = content;

  return endorsement
          .save()
          .then((endorsement) => res.send(endorsement))
          .catch((error) => res.status(500).send({error}));
});

module.exports = router;
