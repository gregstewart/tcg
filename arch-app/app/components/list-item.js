class ListItem extends React.Component {
  constructor() {
    this.displayName = 'listItem';
  }
  render () {
    let entity = this.props.entity;
    return (
      <li key={entity.id}>{entity.name}</li>
    );
  }
};

export default ListItem;
