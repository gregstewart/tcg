import ListItem from './list-item';

class ListComponent extends React.Component {
  constructor() {
    this.displayName = 'listComponent';
  }
  renderListItem() {
    return this.props.entities.map((entity) => {
      return <ListItem entity={entity.deref()} />;
    });
  }
  render() {
    return (
      <ul> { this.renderListItem() } </ul>
    );
  }
}

export default ListComponent;
