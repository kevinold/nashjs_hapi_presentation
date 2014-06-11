var Hapi = require('hapi');
var Joi = require('joi');

// Create a server with a host and port
var server = Hapi.createServer('localhost', 9000);

server.route([{
  method: 'GET',
  path: '/hello',
  config: {
    handler: function (request, reply) {
      reply('hello world');
    },
    cache: { expiresIn: 60 * 5 * 1000 } // 
  }
},
{
  method: 'GET',
  path: '/hello2',
  config: {
    handler: function (request, reply) {
      reply('hello world');
    },
    cache: { expiresIn: 60 * 5 * 1000 } // 
  }
},
{
  method: 'GET',
  path: '/hello-world',
  config: {
    validate: {
        params: {
            name: Joi.string().min(8).max(100)
        },
        query: {
            mood: Joi.string().valid(["neutral","happy","sad"])
                              .default("neutral")
        }
    },
    handler: function (request, reply) {
      reply('hello world');
    }
  }
}
]);

// Start the server with lout
server.pack.require('lout', function() {
    server.start();
});
