import serve from 'koa-static';
import koa from 'koa';

const app = koa();
const port = 3000;

app.use(serve('.'));

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
