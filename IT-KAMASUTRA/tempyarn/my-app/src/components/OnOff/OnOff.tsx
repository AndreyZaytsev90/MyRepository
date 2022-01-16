import React, {useState} from "react";
//import "../../App.css"

type PropsType = {
   // indicator: boolean
}

function OnOff(props: PropsType) {
    console.log("OnOff rendering")

    let [indicator, setIndicator] = useState(false)

    console.log("indicator: " + indicator)

    const onStyle = {
        width: "100px",
        height: "50px",
        border: "1px solid black",
        display: "inline-block",
        padding: "10px",
        backgroundColor: indicator ? "greenyellow" : "white"
    };
    const offStyle = {
        width: "100px",
        height: "50px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        padding: "10px",
        backgroundColor: indicator ? "white" : "indianred"
    };
    const indicatorStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "7.5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: indicator ? "greenyellow" : "indianred"
    };

    return <div>
        <div style={onStyle} onClick={() => { setIndicator(true) }}>On</div>
        <div style={offStyle} onClick={() => { setIndicator(false) }}>Off</div>
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