import React from "react"
import ReactDOM from "react-dom/client"
// revising from lecture 01 :
// using normal javascript :
// const heading= document.createElement("h1");
// heading.innerText="Suman Kumar Sahu";
// const root = document.getElementById("root").appendChild(heading);


// USING REACT CDN LINKS:

// const heading= React.createElement("h1", {}, "This is just a heading ");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)



// using jsx to build the siblings:
const heading= React.createElement("h1", {"id":"suman"},[
    React.createElement("h2", {id:"heading2"}, "This is the heading no 2"),
    React.createElement("h3", {id:"heading3"},"This si heading number 3")
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)
