import { PureComponent } from "react";

class PureCounter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Pure Counter</h2>
        <p>Count: {this.state.counter}</p>
        <button onClick={this.handleClick}>increment</button>
      </div>
    );
  }
}

export default PureCounter;
