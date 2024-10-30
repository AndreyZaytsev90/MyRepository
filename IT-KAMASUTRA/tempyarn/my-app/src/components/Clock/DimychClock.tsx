import React, {useEffect, useState} from 'react';
import {AnalogClock} from "@hoseinh/react-analog-clock";


const addZeroToStart = (num: number) => num < 10 ? "0" + num : num

type PropsType = {
    mode?: 'digital' | 'analog'
}
export const DimychClock: React.FC<PropsType> = ({mode}: PropsType) => {

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

    let view

    switch (mode) {
        case 'analog':
            view = <AnalogClockView data={clock}/>
            break;
        case 'digital':
        default:
            view = <DigitalClockView data={clock}/>

    }


    return (
        <div>{view}</div>
    );
};

type ClockViewType = {
    data: Date
}

export const DigitalClockView: React.FC<ClockViewType> = ({data})=> {
 return <>
     <div>
         <span>{addZeroToStart(data.getHours())}</span>
         :
         <span>{addZeroToStart(data.getMinutes())}</span>
         :
         <span>{addZeroToStart(data.getSeconds())}</span>
     </div>
 </>
}

export const AnalogClockView: React.FC<ClockViewType> = ({data})=> {
    return (
        <AnalogClock
            showMinuteHand={true}
            showSecondHand={true}
            showBorder={true}
            showHandBase={true}
            smooth={true}
            whiteNumbers={false}
            square={false}
            numbersType="numbersAndLines"
            borderColor="#000000"
            handBaseColor="#000000"
            handColor={{ hour: "#000000", minute: "#000000", second: "#e74c3c" }}
            handLength={{ hour: "65px", minute: "90px", second: "90px" }}
            handThickness={{ hour: "2px", minute: "2px", second: "2px" }}
            size="200px"
            backgroundColor="#ffffff"
        />
    );
}