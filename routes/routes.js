var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	res.sendFile(__dirname + '../pages/index.html');
})

router.use('/images', express.static(__dirname + '/Assets/Images/'))

module.exports = router;