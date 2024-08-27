import React, {memo} from "react";


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

const Accordion = memo(function Accordion(props: AccordionPropsType) {
    debugger
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle
            title={props.titleValue}
            onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
})



type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

const AccordionTitle = memo(function AccordionTitle(props: AccordionTitlePropsType) {
    debugger
    console.log("AccordionTitle rendering")
    return <h3 onClick={() => props.onChange()}>--- {props.title} ---</h3>
})


type AccordionBodyPropsType = {
    items: Array<ItemsPropsType>
    onClick: (id: string) => void
}


const AccordionBody = memo(function AccordionBody(props: AccordionBodyPropsType) {
    debugger
    console.log("AccordionBody rendering")
    return <ul>
        {props.items.map((item) => <li onClick={() => {props.onClick(item.id)}} key={item.id}>{item.title}</li>)}
        {/*<li>1</li>
        <li>2</li>
        <li>3</li>*/}
    </ul>
})


export default Accordion