const express = require('express');
const webpack = require('webpack');;
const path = require('path');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, { 
  publicPath: config.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler, {
  path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});