const ListItem = React.createClass({
  render () {
    let entity = this.props.entity;
    return <li key={entity.id}>{entity.name}</li>;
  }
});

export default ListItem;