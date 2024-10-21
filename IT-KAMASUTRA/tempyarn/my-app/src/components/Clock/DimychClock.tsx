import React, {useEffect, useState} from 'react';


const addZeroToStart = (num: number) => num < 10 ? "0" + num : num

type PropsType = {}
export const DimychClock: React.FC<PropsType> = () => {

    const [clock, setClock] = useState(new Date())

    useEffect(() => {

        const intervalId = setInterval(() => {
            setClock(new Date())
        }, 1000)
// для оптимизации кода зачищаем интервал обновления для компоненты которая умерла
        return () => {
            clearInterval(intervalId)
        }

    }, [])


    return (
        <div>
            <span>{addZeroToStart(clock.getHours())}</span>
            :
            <span>{addZeroToStart(clock.getMinutes())}</span>
            :
            <span>{addZeroToStart(clock.getSeconds())}</span>
        </div>
    );
};

