import React, {ChangeEvent, useRef, useState} from 'react';

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {

    const [value, setValue] = useState("")

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return <div><input onChange={ (event) => {onChange(event)} }/> -{value} </div>
}

export const GetValueOfUncontrolledInput = () => {

    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <div>
        <input ref={inputRef}/>
        <button onClick={save}>Save</button>- actual value: {value}
    </div>
}

export const ControlledInputWithFixedValue = () => <input value={"IT-Incubator"}/>

export default UncontrolledInput;