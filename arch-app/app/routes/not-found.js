import BaseRoute from './base-route';

class NotFoundRoute extends BaseRoute {
  getTitle() {
    return super.getTitle('Not Found');
  }

  render() {
    return (
      <h1>Page Not Found</h1>
    );
  }
}

export default NotFoundRoute;
