import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PlayerTile from '../components/PlayerTile';
import * as CommandActions from '../actions/commands';

function mapStateToProps(state) {
  return {
    health: state.entities[0].health,
    name: state.entities[0].name
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CommandActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerTile);
