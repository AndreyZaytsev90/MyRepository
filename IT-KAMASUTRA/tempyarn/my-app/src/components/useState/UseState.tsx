import {useState} from "react";

export const UseState = () => {

    const [counter, setCounter] = useState(0)
    return (
        <>
            <span>{counter}</span>
        <button onClick={()=> setCounter(counter+1)}>+</button>
        </>
    );
};