import React from "react";

const Paydet = (props) => {
  return (
    <>
      <img src={props.image} alt="" />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </>
  );
};

export default Paydet;
