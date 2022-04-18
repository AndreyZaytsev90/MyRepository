import React from "react";


type ItemsPropsType = {
    title: string
    id: string
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: Array<ItemsPropsType>
    onClick: (id: string) => void
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle
            title={props.titleValue}
            onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}


type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onChange={props.onChange}>--- {props.title} ---</h3>
}

type AccordionBodyPropsType = {
    items: Array<ItemsPropsType>
    onClick: (id: string) => void
}


function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return <ul>
        {/*{props.items.map((i) => <li onClick={ () => {props.onClick(i.id)} } key={i.id}>{i.title}</li>)}*/}
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion