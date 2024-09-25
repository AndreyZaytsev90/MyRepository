import {useState} from "react";

function generateNumber() {
    return 1613461864646168
}

export const UseState = () => {
    console.log("render")
    const [counter, setCounter] = useState(generateNumber)
    return (
        <>
            <span>{counter}</span>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    );
};