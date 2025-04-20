import React from "react"
import ReactDOM from "react-dom/client"
// React Elements : kind of equivalent to DDM elements and it is a object and the when it is getting required to 
// const jsxheading = <h1>Suman Kumar Sahu</h1>
// // these both are same thing, these are transpiled by babel also known as javascipt compiler
// const heading= React.createElement("h1", {id: "heading "}, "This is a heading");
// const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <>
//         {heading}
//         {jsxheading}
//     </>
// )

// Components Composition
// we can also inject variables inside this 
// we can also go for component composition
// we can also go for return

const Heading= ()=>{
    return ( "This is the heading"
    )
}



// Cross site scripting
// suppose some api is getting called over here and the it can take access to your browswer from that he can be able to access to get the system data along with your system information and along with the cookies and session
const data = 100000;
const NumberComponent=()=>{
    return (
        <>
        <p>This is a paragraph tag {data}</p>
        </>
    )
}
const HeadingComponent=()=> <div><h1><NumberComponent/></h1></div>

// also we can able to call the functional components in many manner such as:
const Renderer =() =>{
    return(
        <>
            <NumberComponent></NumberComponent>
            <NumberComponent/>
            {NumberComponent()}
        </>
    )
}
const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<Renderer/>)





  