var config = require('./webpack.debug.config.js'),
    host = process.env.HOST || 'localhost',
    port = parseInt(process.env.PORT) || 33333,
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server');

config.entry = [
  `webpack-dev-server/client?http://${host}:${port}`
].concat(config.entry);

// Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
config.output.publicPath = `http://${host}:${port}/assets/debug/`;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  historyApiFallback: true
}).listen(port, '0.0.0.0', function (err, result) {
  if (err)  console.log(err);
  console.log(`Listening on ${host}:${port}`)
});
