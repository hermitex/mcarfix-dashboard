// Class/Function => Functional Components

// ES6 class syntax

import { Component } from "react";

class Test extends Component {
  constructor(props) {
    super();
    // state => private memmory/storage of the component
    this.state = {
      sum: 0,
      total: 0,
      name: "test",
    };
    this.a = this.addNumbers.a(this);
  }

//   this => undefined, Window, {}



  static getDerivedStateFromProps() {}
  a() {
    this.state = {}; // mutating the state directly => DON'T
    this.setState({})
  }

  render() {
    return <ul>{this.addNumbers()} //diff algorithms</ul>; // small, p, em, div, span,  a
  }

  componentDidMount() {}
}
