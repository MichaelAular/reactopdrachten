import { Component } from "react";

export default class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h2>Hello Class {this.props.title2}!</h2>
        <input value={this.props.title2} onChange={this.props.setTitleHandler}/>
      </div>
    );
  }
}