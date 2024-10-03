import {useState} from "react";

function generateNumber() {
    return 1613461864646168
}

export const UseState = () => {
    console.log("render")
    //Передаем в качестве начального значения функцию. Реакт сделает это один раз.
    // useMemo для этого не нужен
    //1)
    const [counter, setCounter] = useState(generateNumber)

    //2)setCounter вызывает функцию changer передавая в него старое значение и функция делает преобразования. Далее новое значение записывается в переменную counter
    const changer = (state: number)=> {
        return state+1
    }
    return (
        <>
            <span>{counter}</span>
            <br/>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <br/>
            <br/>
            <button onClick={() => setCounter(changer)}>+</button>
        </>
    );
};