//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from './component/secondscounter.jsx'
//render your react application


setInterval(countSeconds, 1000);
let seconds = 0
function countSeconds() {
    console.log('countSeconds')
    seconds = seconds + 1
    console.log(seconds)
    ReactDOM.render(<SecondsCounter seconds={seconds} />, document.querySelector("#app"));
}