var express = require('express');
var router = express.Router();
var path = require('path')

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../pages/index.html'));
})

router.use('/images', express.static(path.join(__dirname, '../Assets/Images/')))

module.exports = router;