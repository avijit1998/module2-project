import React, { Component, createRef, useRef } from "react";
import ActionButton2 from "./ActionButton2";

class ActionButton extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }

  //at any time in the lifecycle of the component, we can access the actual HTML element at this.buttonRef.current.

  clickHandler = () => {
    console.log(this.inputRef);
  };

  render() {
    const { label } = this.props;
    return (
      <div>
        <ActionButton2 label={label} ref={this.inputRef} />
        <button onClick={this.clickHandler}>{label}</button>
      </div>
    );
  }
}

export default ActionButton;
