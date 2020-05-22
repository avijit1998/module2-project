import React, { useRef, forwardRef } from "react";

const ActionButton2 = (props, ref) => {
  return (
    <div>
      <input type="text" name={props.label} ref={ref}></input>
    </div>
  );
};

export default forwardRef(ActionButton2);
