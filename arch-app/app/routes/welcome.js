import BaseRoute from './base-route';
import arch from 'arch';

class WelcomeRoute extends BaseRoute {
  getTitle() {
    return super.getTitle("Welcome!");
  }

  render() {
    return (
      <div className="container">
      <h1>Welcome! This is your first Arch app!</h1>
      <a href="/player-races">Player races</a>
      </div>
    )
  }
}

export default WelcomeRoute;
