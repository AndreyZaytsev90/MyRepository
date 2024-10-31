import {useEffect, useState} from "react";
import {log} from "util";

export const SimpleExampleUseEffect = () => {
    console.log("ComponentUE")

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        //debugger
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

export const SetTimeOutExampleUseEffect = () => {
    console.log("ComponentUE")

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    /*
    useEffect(() => {
            setTimeout(() => {
                console.log("setTimeout")
                document.title = counter.toString()
            }, 1000)

            setInterval(() => {
               // setCounter(counter + 1)
                setCounter(state => state +1)
            }, 1000)
        }, []
    )
    */

    return (
        <>
            <span>Hello, counter: {counter} ---- fake: {fake}</span>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setFake(fake + 1)}>+</button>

        </>
    );
};


export const ResetEffect = () => {
    const [counter, setCounter] = useState(1)

    console.log('Rendered')

    useEffect(() => {
        console.log('Effect occurred')

        return () => console.log('reset effect')
    }, [])

    const increase = () => setCounter(counter + 1)


    return (
        <>
            Hello, counter: {counter}
            <button onClick={increase}>+</button>
        </>
    )
}


export const KeyTracker = () => {

    const [text, setText] = useState('')

    console.log('Rendered')

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            setText((prevText) => prevText + e.key)
        }

        window.addEventListener('keypress', handler)
        //Зачистка
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [])


    return (
        <>
            Tracker text: {text}
        </>
    )
}

export const SetTimeOut = () => {

    const [text, setText] = useState('')


    useEffect(() => {
        const timeOutId = setTimeout(()=> {
            setText('3 seconds passed')
        }, 3000)
        //Зачистка
        return () => {
            clearTimeout(timeOutId)
        }
    }, [text])


    return (
        <>
            Tracker text: {text}
        </>
    )
}