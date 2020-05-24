var express = require('express');
var router = express.Router();

//Theme constants
const darkTheme = "Dark";
const lightTheme = "Light";


router.get('/', (req, res) => {
	if(! req.session.theme)
		req.session.theme = darkTheme;	//Default
	console.log("Current theme = " + req.session.theme);
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

		console.log("New theme set = " + req.session.theme);
		res.end();
	}
})

module.exports = router;