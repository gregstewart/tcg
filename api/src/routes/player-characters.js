import { readFile } from 'fs';

export default [
  {
    method: 'GET',
    path: '/player-characters',
    handler: (request, reply) => {
      readFile('../mock-api/src/assets/raml/examples/player-characters-list.json', 'utf8', (err,data) => {
        if (err) {
          return console.log(err);
        }
        reply(data);
      });
    }
  },
  {
    method: 'GET',
    path: '/player-characters/{id}',
    handler: function (request, reply) {
      //request.params.id
      readFile('../mock-api/src/assets/raml/examples/player-character.json', 'utf8', (err,data) => {
        if (err) {
          return console.log(err);
        }
        reply(data);
      });
    }
  }
];
