import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Hello World from JSX</h1>;
const multiLineHead = (
  <h1 className="head" tabName="linee">
    Hello from multilne JSX
  </h1>
);

const reactElement = <h1>Normal JSX element</h1>;

const FunctionalComponent1 = () => {
  return <h1>Inside functional component</h1>;
};

const FunctionalComponent2 = () => (
  <h1>Inside functional component single line</h1>
);

const FunctionalComponent3 = () => (
  <div id="container">
    <FunctionalComponent1 />
    <h1>Inside functional component multi line</h1>
  </div>
);

const a = 10000;

const Title = () =>(
    <h1>Title New</h1>
)
const HeadingComp = () => (
  <div>
    {a}
    {console.log("abc")}
    <Title/>
    <Title></Title>
    {Title()}
    {reactElement}
    <h2>Headding</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(reactElement);
root.render(<HeadingComp />);
