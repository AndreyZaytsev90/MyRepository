import React, {useReducer, useState} from "react";
import {collapsedHandlerAC, UncontrolledAccordionReducer} from "./UncontrolledAccordion-reducer";

type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")


    //let [collapsed, setCollapsed] = useState(true)

    let [state, dispatchCollapsed] = useReducer(UncontrolledAccordionReducer, {collapsed: true})

    const collapsedHandler = () => {
       // collapsed ? setCollapsed(false) : setCollapsed(true)
        dispatchCollapsed(collapsedHandlerAC())
    }

    return <div>
        <AccordionTitle title={props.titleValue}  onClick={collapsedHandler}/>
        {/*<button onClick={() => { collapsed ? setCollapsed(false) : setCollapsed(true)}}>Down</button>*/}
        {!state.collapsed && <AccordionBody/>}
    </div>
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={() => {props.onClick()}}>--- {props.title} ---</h3>
}

function AccordionBody(props: any) {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UncontrolledAccordion