import {Server} from 'hapi';

const server  = new Server();
server.connection({
  host: 'localhost',
  port: 3001
});

server.route({
  method: 'GET',
  path: '/hello',
  handler: (request, reply) => {
    reply('Hello world');
  }
});

server.start(() => {
  console.log('Server runnint at: ' + server.info.uri);
});
