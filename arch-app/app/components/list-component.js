import arch from 'arch';
// import ListItem from './list-item';

let d = arch.DOM;

class ListComponent extends React.Component {
  constructor() {
    this.displayName = 'listComponent';
  }
  render() {
    return (<ul>
 {
   this.props.entities.map((entity) => {
     return <ListItem entity={entity.deref()} />;
   })
 }
 </ul>);
  }
}

export default ListComponent;

