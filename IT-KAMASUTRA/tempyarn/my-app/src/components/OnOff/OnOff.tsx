import React from "react";
//import "../../App.css"

type PropsType = {
    indicator: boolean
}

function OnOff(props: PropsType) {

    const onStyle = {
        width: "100px",
        height: "50px",
        border: "1px solid black",
        display: "inline-block",
        padding: "10px",
        backgroundColor: props.indicator === true ? "greenyellow" : "white"
    };
    const offStyle = {
        width: "100px",
        height: "50px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        padding: "10px",
        backgroundColor: !props.indicator === true ? "indianred" : "white"
    };
    const indicatorStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "7.5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: !props.indicator === true ?"indianred" : "greenyellow"
    };

    return <div>
        <div style={onStyle}>On</div>
        <div style={offStyle}>Off</div>
        <div style={indicatorStyle}/>
    </div>
 /*   if (props.indicator) {
        return <div>
            <OnOffTrue/>
        </div>

    } else {
        return <div>
            <OnOffFalse/>
        </div>

    }
}

function OnOffTrue() {
    return (
        <div className="OnOff">
            <div className="onGreen">On</div>
            <div className="offWhite">Off</div>
            <div className="bulbGreen"/>
        </div>
    )
}

function OnOffFalse() {
    return (
        <div className="OnOff">
            <div className="onWhite">On</div>
            <div className="offRed">Off</div>
            <div className="bulbRed"/>
        </div>
    )*/
}

export default OnOff;