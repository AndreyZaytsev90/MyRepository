 import React, {ChangeEvent, memo, useRef, useState} from 'react';

//Uncontrolled

export const UnControlledInput = memo(()=> <input/>)


export const TrackValueOfUncontrolledInput = memo(() => {

    const [value, setValue] = useState("")

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return <div><input onChange={(event) => {
        onChange(event)
    }}/> -{value} </div>
})


export const GetValueOfUncontrolledInput = memo(() => {

    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <div>
        <input ref={inputRef}/>
        <button onClick={save}>Save</button>
        - actual value: {value}
    </div>
})


//Controlled

export const ControlledInputWithFixedValue = memo(()=> <input value={"IT-Incubator"}/>)


export const ControlledInput = memo(() => {

    const [parentValue, setParentValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChange}/>
})

export const ControlledCheckbox = memo(() => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type={"checkbox"} checked={parentValue} onChange={onChange}/>
})

export const ControlledSelect = memo(() => {
    const [parentValue, setParentValue] = useState<string|undefined>("2")
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value="1">Moscow</option>
        <option value="2">Minsk</option>
        <option value="3">Kiev</option>
    </select>
})

export default UnControlledInput;