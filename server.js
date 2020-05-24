const express = require('express');
const webpack = require('webpack');
const session = require('express-session');
const routes  = require('./routes/routes');
const webpackConfig = require('./webpack.config.js');
const { port, sessionSecret } = require('./config');

//Initialize Express
const app = express();

//Webpack
const compiler = webpack(webpackConfig);
app.use(require("webpack-dev-middleware")(compiler, { 
	publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler, {
	path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

//Session initialization
app.use(session({
	secret: sessionSecret,
	resave: true,
	saveUninitialized: true
}));

//Initializing JSON body for post requests
app.use(express.json());

//Routing
app.use("/", require('./routes/routes'));
app.use("/theme", require('./routes/themeRoute')); 

app.listen(port);