import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")


    let [collapsed, setCollapsed] = useState(true)

    return <div>
        <AccordionTitle title={props.titleValue}  onClick={() => {collapsed ? setCollapsed(false) : setCollapsed(true)}}/>
        {/*<button onClick={() => { collapsed ? setCollapsed(false) : setCollapsed(true)}}>Down</button>*/}
        {!collapsed && <AccordionBody/>}
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