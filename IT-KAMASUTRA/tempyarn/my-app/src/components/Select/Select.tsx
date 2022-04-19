import React from "react";

type ItemsPropsType = {
    title: string
    id: string
}

type SelectPropsType = {
    id: string
    collapsed: boolean
    onChange: (id: string) => void
    items: Array<ItemsPropsType>
}

export function Select(props: SelectPropsType) {
    return (
        <div>
            <div>{props.items.find(item => props.id === item.id)}</div>
            {props.items.map(item => <div>{item.title}</div>)}
        </div>
    )
}
/// Завис . как делать дальне не знаю. 19.04.2022
/// Кабзда как подробно 14-15 урок