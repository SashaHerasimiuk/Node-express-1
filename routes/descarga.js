var express = require('express');
var router = express();

router.get('/', function(req, res){
	res.download('./downloads/prueba.txt');
})

module.exports = router;