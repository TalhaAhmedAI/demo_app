import React from "react";

const Data = (props) => {
  return (
    <div>
      <h1>My name is {props.name}</h1>
      <h1>I'm learning {props.library}</h1>
    </div>
  );
};

export default Data;
