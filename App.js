import React from "react";
import ReactDOM from "react-dom/client";

//react element
const parent = React.createElement('h1', {id :"heading"}, "Hello From  React 😃");

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

//jsx element
const jsxHeading = <h1 id = "2" className="helloJsx" >Hello From JSX ☺️</h1>;
console.log(jsxHeading); //jsx -- react.createElement(obj) -- htmlelemnt


//Function Component means a js function return a jsx or reaact element

// one line without return keyword
const HeadingComponent = () => <h1>Hello from function component🐞</h1>

// multiLine using brakects  but whatever it needs a a parent div 
const HeadingComponent2 = () =>(
  <div>
     <div>
       <h1>But First this to test</h1>
       <h1>Hello from function component😆🐞</h1>
     </div>
     <div>
      <h1>But First this to test</h1>
      <h1>Hello from function component😆🐞</h1>
     </div>
</div>
);

// use return in jsx every js element should have a parent div
const HeadingComponent3 = () =>{
    return (
        <div>
          <h1>Hello from function component😆🐞</h1>
        </div>
    )
};


// component inside component
const Component1 = () =>{
    return (
        <h1>
            Hello,
        </h1>
    )
};

const Component2 = () =>{
    return (
       <div>
        <Component1 />
         <h1>
            Welcome to my page Guys 😄
         </h1>
       </div>
    )
}

// react element  inside component
const reactElem = (
    <h1>Hello am from react elem going to the component ☕</h1>
)
console.log(reactElem);

const ComponentReactElem = () => {
  return (
    <div>
        {reactElem}
        <h1>I am waiting for the h1 tage from reactElem 😁</h1>
    </div>
  )
};

// mix and match react element in component 
// compoent inside react elem 

const spanTitle = <span>Hello I am span 😅</span>

// const title = (    ///when Title is here we got error of const intialization
//     <div>                   
//         <h1>{spanTitle} I am title 🧚</h1>
//         <ComponentSpanTitle/>
//     </div>
// );

const ComponentSpanTitle = () => {
    return(
        <div>
            {/* {title} */}
            <h1>Hello and Lastly I am the Component😍</h1>
        </div>
    )
};

const title = (   // three ways to  use component
    <div>                   
        <h1>{spanTitle} I am title 🧚</h1>
        <ComponentSpanTitle/>   
        {ComponentSpanTitle()}
        <ComponentSpanTitle></ComponentSpanTitle>
    </div>
);

root.render(title);