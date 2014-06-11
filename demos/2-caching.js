var Hapi = require('hapi');

// Create a server with a host and port
var server = Hapi.createServer('localhost', 9000);

server.route({
  method: 'GET',
  path: '/hello',
  config: {
    handler: function (request, reply) {
      reply('hello world');
    },
    cache: { expiresIn: 60 * 5 * 1000 } // 
  }
});

// Start the server
server.start();
