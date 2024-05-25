import React from "react";
import ReactDOM from "react-dom"

//react element
const parent = React.createElement('h1', {id :"heading"}, "Hello From  React 😃");

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

//jsx element
const jsxHeading = <h1 id = "2" className="helloJsx" >Hello From JSX ☺️</h1>;
console.log(jsxHeading); //jsx -- react.createElement(obj) -- htmlelemnt

root.render(jsxHeading);