import React, {useEffect, useState} from 'react';

const Clock = () => {

    //const [clock, setClock] = useState(1)
    //const [time, setTime] = useState(new Date());
    const now = new Date();
    const [hours, setHours] = useState(now.getHours());
    const [minutes, setMinutes] = useState(now.getMinutes());
    const [seconds, setSeconds] = useState(now.getSeconds());

    useEffect(() => {
        if (seconds < 60) {
            setTimeout(() => {
                //setClock(()=> clock +1)
                //setTime(new Date());
                setSeconds(() => seconds + 1)
            }, 1000)
        } else setSeconds(0)

        if (seconds === 59) {
            setTimeout(() => {
                setMinutes(() => minutes + 1)
            }, 1000)
        } else seconds === 59 && minutes === 59 ? setMinutes(0): null

        if (seconds === 59 && minutes === 59) {
            setTimeout(() => {
                setHours(() => hours + 1)
            }, 1000)
        } else hours === 23 && seconds === 59 && minutes === 59 ? setHours(0): null
        }, [now])


    return (
        <div>
            {/* {clock}*/}
            {/*  <div>{time.toLocaleTimeString()}</div>*/}
            <div>{hours}:{minutes}:{seconds}</div>
        </div>
    );
};

export default Clock;