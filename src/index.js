import React from "react";
import ReactDOM from "react-dom";

const Index = ({title}) => {
  return <div><h1>{title}</h1></div>;
};

ReactDOM.render(<Index title='Terry Creamer' />, document.getElementById("index"));