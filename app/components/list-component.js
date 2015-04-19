import ListItem from './list-item';

const ListComponent = React.createClass({
  render () {
    return (
      <ul>
      {
        this.props.entities.map((entity) => {
          return <ListItem entity={entity.deref()} />;
        })
      }
      </ul>
    );
  }
});

export default ListComponent;