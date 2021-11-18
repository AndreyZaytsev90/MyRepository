import React from 'react';
import logo from './logo.svg';
import './App.css';


function hello() {
    debugger
    alert("Hello IT-Incubator")
}
//hello();
//function declaration
function App() {
    // полезное что-то
debugger
    // обязана вернуть JSX
    return (
        <div>
            This is APP component
            <Rating />
            <Accordion />
        </div>
    );
}


function Rating() {
    debugger
    return (
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>

    )

}

function Accordion() {
    debugger
    return <div>
        <h3>Меню</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>

}

function Star() {
    return  <div>star</div>
}
export default App;

