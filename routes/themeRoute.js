var express = require('express');
var router = express.Router();

//Theme constants
const darkTheme = "dark";
const lightTheme = "light";


router.get('/', (req, res) => {
	if(! req.session.theme)
		req.session.theme = darkTheme;	//Default
	res.json({
		theme: req.session.theme
	})
})

router.post('/', (req, res) => {
	let newTheme = req.body.theme;
	if(newTheme) {
		switch(newTheme) {
			case darkTheme: req.session.theme = darkTheme;	break;
			case lightTheme: req.session.theme = lightTheme;	break;
		}
		res.end();
	}
})

module.exports = router;