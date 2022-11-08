import React from "react";


type ItemsPropsType = {
    title: string
    id: string
}

type SelectPropsType = {
    id: string
    collapsed: boolean
    onChange?: (id: string) => void
    items: Array<ItemsPropsType>
}

export function SelectByDimych(props: SelectPropsType) {

    const selectItem = props.items.find((i) => props.id === i.id)


    return (
        <div>
            <h3>{selectItem && selectItem.id}</h3>
            {props.items.map(item => <div>{item.title}</div>)}
        </div>
    )
}


export default SelectByDimych;