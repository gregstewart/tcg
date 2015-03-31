import ListItem from './list-item';

const ListComponent = React.createClass({
  render () {
    return (
      <ul>
      {
        this.props.entities.map((entity) => {
          let deferedEntity = entity.deref();
          return (
            <ListItem entity={deferedEntity} />
          )
        })
      }
      </ul>
    )
  }
});

export default ListComponent;