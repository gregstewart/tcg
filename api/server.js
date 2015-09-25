import { Server } from 'hapi';
import { readFile } from 'fs';
import routes from './routes/index';

const server  = new Server();
server.connection({
  host: 'localhost',
  port: 3001
});

server.route(routes);

server.start(() => {
  console.log('Server running at: ' + server.info.uri);
});
