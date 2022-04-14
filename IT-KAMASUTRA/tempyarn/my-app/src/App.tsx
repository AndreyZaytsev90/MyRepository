import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledInput, {
    ControlledInputWithFixedValue, GetValueOfUncontrolledInput,
    TrackValueOfUncontrolledInput
} from "./components/UncontrolledInput/UncontrolledInput";


function App(props: any) {
    // полезное что-то
    // обязана вернуть JSX

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [indicator, setIndicator] = useState(false)

    console.log("App rendering")
    return (
        <div className={"app"}>
            {/*<OnOff />
            <UncontrolledAccordion titleValue={"Menu"} />
            <UncontrolledAccordion titleValue={"Users"} />
            <Accordion titleValue={"Menu"} collapsed={false}/>

            <UncontrolledRating />*/}
            {/*<Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <UncontrolledRating/>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onClick={() => {setAccordionCollapsed(!accordionCollapsed)}}/>

            <OnOff indicator={indicator} setIndicator={setIndicator}/>

            <UncontrolledOnOff onChange={setIndicator}/> {indicator.toString()}
            <UncontrolledAccordion titleValue={"Список"}/>*/}

            <UncontrolledInput/>
            <TrackValueOfUncontrolledInput/>
            <GetValueOfUncontrolledInput/>
            <ControlledInputWithFixedValue/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>

}


export default App;

