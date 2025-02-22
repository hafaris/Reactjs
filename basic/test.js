import React from "react"
import ReactDOM from "react-dom/client"

function Hello(props){
    return <h1>Hello World</h1>;
}

const containor=document.getElementById("root")
const root=ReactDOM.createRoot(containor)
root.render(<Hello/>)