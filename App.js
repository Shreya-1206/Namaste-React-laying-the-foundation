import React from "react";
import ReactDOM from "react-dom"
const parent = React.createElement('h1', {id :"heading"}, "Hello From  React 😃");

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);