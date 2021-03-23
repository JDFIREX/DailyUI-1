import React from "react"
import ReactDOM from "react-dom"
import App from "./app/App"
import "./styles/Style.css"

const Root = () => {


    return(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}


ReactDOM.render(<Root /> , document.querySelector("#root"))