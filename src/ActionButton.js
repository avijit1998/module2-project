import React, { Component, createRef, useRef } from "react";

const ActionButton = (props) => {
  const buttonRef = useRef(null);
  return (
    <div>
      <button onClick={props.action} ref={buttonRef}>
        {props.label}
      </button>
    </div>
  );
};

class ActionButton2 extends Component {
  constructor() {
    super();
    this.buttonRef = createRef();
  }

  //at any time in the lifecycle of the component, we can access the actual HTML element at this.buttonRef.current.

  render() {
    const { label, action } = this.props;
    return (
      <div>
        <ActionButton action={action} label={label} />
        {/* <button onClick={action} ref={this.buttonRef}>
          {label}
        </button> */}
      </div>
    );
  }
}

export default ActionButton2;
