import React, { Component } from "react";
class Test extends Component {
  state = {
    posts: {}
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => this.setState({ posts: data }));
  }
  render() {
    const { posts } = this.state;
    return <div />;
  }
}

export default Test;
