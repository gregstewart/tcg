import reflex from 'reflex';
import home from './routes/home';

const Application = reflex.application.create({
  getInitialState() {
    return {};
  },
  routes() {
    let page = reflex.routes.page;
    return reflex.routes.define(
      page('/', home)
    );
  },
  start(state) {

  }
});

export default Application;