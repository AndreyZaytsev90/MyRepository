import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


/*function hello() {
    debugger
    alert("Hello IT-Incubator")
}*/

//hello();

//function declaration
function App() {
    // полезное что-то
    // обязана вернуть JSX
    console.log("App rendering")
    return (
        <div>

            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>

        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendering")
    return <>This is APP component</>

}

export default App;

