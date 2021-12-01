var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.redirect(404, '/');
})

module.exports = router;