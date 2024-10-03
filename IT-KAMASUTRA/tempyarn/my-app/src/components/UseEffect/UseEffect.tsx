import {useEffect, useState} from "react";

export const UseEffect = () => {
    console.log("ComponentUE")

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(()=>{
        debugger
        console.log("useEffect")
        document.title = counter.toString()
        //Примеры sideEffect
        //api.getUsers().then('') - запрос на сервер
        //setInterval - задача интервала
        //indexedDB - работа с локальной базой данных
        //document.getElementId - обращение в элементу по id
        //document.title = "User " - изменение заголовка документа
        // и. др
    }, [counter])
    // если зависимости нет, то useEffect будет вызываться при каждом рендере компоненты
    // если в зависимости указать пустой массив [], то useEffect сработает только 1 раз при вмонтировании компоненты
    // если в зависимости указать что-то конкретное, например переменную counter, то useEffect будет вызываться только при изменении переменной counter


    return (
        <>
            <span>Hello, {counter}</span>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {fake}
            <button onClick={() => setFake(fake + 1)}>+</button>

        </>
    );
};