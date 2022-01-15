import React from "react";
import "../../App.css"

type OnOffPropsType = {
    indicator: boolean
}

function OnOff(props: OnOffPropsType) {
    if (props.indicator) {
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
    )
}

export default OnOff