// TODO
var App = () => (
  <div>
    {" "}
    Some div
    <h1> Grocer list </h1>
    <GroceryList items={["bananas", "cucumbers", "apple"]} />
  </div>
);

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    // Can it have `this` properties?
    // e.g. this.vegetables
    this.vegetables = ["bell pepper", "onion", "carrots", "eggplant"];
    this.fruits = ["apples", "bananas", "dates"];
    this.state = {
      items: props.items,
      text: "Add vegetables",
    };
  }

  onButtonClick() {
    this.changeItems();
    // this.changeText();
    // this.additem();
  }

  additem() {
    this.state.items.push("cookie");
    this.render();
    this.setState({
      items: this.state.items,
    });
  }
  // if you're editing arrays, and always to rerender on array change
  // make sure to slice teh array and reassign the key to that new array
  // as just updating an array does not create a new location in memory
  // and ususally does not trigger a rerender in React.

  changeItems() {
    this.setState({
      items: Math.random() < 0.5 ? this.fruits : this.vegetables,
    });
  }

  // Async issue: the text does not change at the same time the list of items
  // changes. The text swap happens one button click after the items swap.
  changeText() {
    this.setState({
      text:
        JSON.stringify(this.state.items) === JSON.stringify(this.vegetables)
          ? "swap to fruits"
          : "swap to vegetables",
    });
  }

  render() {
    // What if we do the logic of the text within the render function?
    let text =
      JSON.stringify(this.state.items) === JSON.stringify(this.vegetables)
        ? "swap to fruits"
        : "swap to vegetables";

    return (
      <div>
        <button onClick={this.onButtonClick.bind(this)}>{text}</button>
        <ul>
          {this.state.items.map((item) => (
            <GroceryListItem item={item} />
          ))}
        </ul>
      </div>
    );
  }
}

// Possible fix for the async issue with the proper button text displaying
// is having a functional component handle the text?
// let Text = (props) => (

// )

var Carrots = () => <li>carotssssss</li>;

var Cucumbers = () => <li>cucumberssss</li>;

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
    };
  }

  onItemClick() {
    this.setState({
      done: !this.state.done,
    });
  }

  render() {
    let itemStyle = {
      fontWeight: this.state.done ? 700 : 400,
    };

    return (
      <li style={itemStyle} onClick={this.onItemClick.bind(this)}>
        {this.props.item}
      </li>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
