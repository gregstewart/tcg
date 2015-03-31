const ListItem = React.createClass({
  render () {
    return (
      <li key={this.props.entity.id}>{this.props.entity.name}</li>
    )
  }
});

export default ListItem;