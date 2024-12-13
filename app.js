import React from "./node_modules/react";
import ReactDOM from "./node_modules/react-dom./client";
import "./index.css";
const parent = React.createElement("div",{id: "parent"},
     [React.createElement("div",{id: "child"},
    [
    React.createElement("h1",{id:"grandchild"},"hey.. hi KANIMOZHI...YOU ARE GONNA BE AWESOME "),
    React.createElement("h2", {id:"sibling"},"this is my sibling")]),
    React.createElement("div",{id: "child2"},
    [
    React.createElement("h1",{id:"maya"},"iam the second child"),
    React.createElement("h2",{id:"isabelle"},"iam the the third child")])]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);