// Load dependencies
var nconf = require('nconf');
var Hapi = require('hapi');
var Boom = require('boom');
var fs = require('fs');
var path = require('path');

/** Get the package.json **/
try {
  var appPackage = require(__dirname + '/../package.json');
} catch (e) {
  err(e);
  exit();
}

/** Init config **/
nconf.argv().env();
nconf.file({ file: path.resolve('./server/config/config.json') });

/** Init server **/
var routeFilesPath = path.resolve('./server/routes');
var server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: path.join(__dirname, '/../client')
      }
    }
  }
});

// Setup server host and port
server.connection({host: nconf.get("server:host"), port: nconf.get("server:port")});

// Setup server routes
fs.readdirSync(routeFilesPath).forEach(function(file) {
 var routes = require(routeFilesPath + '/' + file).call();
 for (var route in routes) {
  server.route(routes[route]);
  }
});

// Setup views templating
server.views({
 engines: {
  html: require('handlebars')
},
relativeTo: __dirname,
path: './views',
layoutPath: './views/layout'
});

// Start server
server.start(function() {
  console.log('server started on %s', server.info.uri);
});

/** Start application **/
console.log("%s v%s started", appPackage.name, appPackage.version);

/** Export server instance for grunt-hapi **/
module.exports = server;

