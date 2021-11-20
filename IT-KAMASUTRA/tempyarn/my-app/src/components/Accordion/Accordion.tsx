import React from "react";

function Accordion(props: any) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle title = { props.title }/>
        <AccordionBody body = { props.body }/>
    </div>

}

function AccordionTitle(props: any) {
    console.log("AccordionTitle rendering")
    return (
        <h3>{ props.title }</h3>
    )

}

function AccordionBody(props: any) {
    console.log("AccordionBody rendering")
    return <ul>
        <li>{ props.title }</li>
        <li>{ props.title }</li>
        <li>{ props.title }</li>
    </ul>
}

export default Accordion