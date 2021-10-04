// TODO
var App = () => (
  <div> Some div
    <h1> Grocer list </h1>
    <GroceryList items={['carrots', 'cucumbers', 'cake']}/>
  </div>
);

var GroceryList = (props) => (
  <ul>
    {/* <Cucumbers/>
    <Carrots/> */}
    {/* <GroceryListItem item={props.items[0]}/>
    <GroceryListItem item={props.items[1]}/>
    <GroceryListItem item={props.items[2]}/> */}
    {props.items.map(item =>
      <GroceryListItem item={item}/>)
    }
  </ul>
)

var Carrots = () => (
  <li>carotssssss</li>
)

var Cucumbers = () => (
  <li>cucumberssss</li>
)

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onItemClick() {
    this.setState({
      done: !this.state.done
    })
  }

  render() {

    let itemStyle = {
      fontWeight: this.state.done ? 700 : 400
    }

    return(
      <li style={itemStyle} onClick={this.onItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
