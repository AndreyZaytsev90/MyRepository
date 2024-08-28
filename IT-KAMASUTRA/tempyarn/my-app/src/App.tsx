import React, { useState } from 'react';
import './App.css';
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import { Rating, RatingValueType } from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import UnControlledInput, {
	ControlledCheckbox,
	ControlledInput,
	ControlledInputWithFixedValue, ControlledSelect, GetValueOfUncontrolledInput,
	TrackValueOfUncontrolledInput
} from "./components/(Un)controlledInput/(Un)controlledInput";
import { v1 } from "uuid";
import { Select } from "@material-ui/core";
import { MySelect } from "./components/Select/MySelect";
import SelectByDimych from "./components/Select/SelectByDimych";
import {HelpToUseMemo, UseMemo} from "./components/UseMemo";


function App(props: any) {
	// полезное что-то
	// обязана вернуть JSX

	let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
	let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
	let [indicator, setIndicator] = useState(false)

	const onClickCallback = (id: string) => alert(`user with ID ${id} should be happy!`)




	console.log("App rendering")
	return (
		<div className={"app"}>
			{/*<OnOff />
            <UncontrolledAccordion titleValue={"Menu"} />
            <UncontrolledAccordion titleValue={"Users"} />
            <Accordion titleValue={"Menu"} collapsed={false}/>

            <UncontrolledRating />*/}
			{/* <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <UncontrolledRating/>*/}
			{/*<Accordion
                titleValue={"Users"}
                collapsed={accordionCollapsed}
                onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                onClick={onClickCallback}
                items={[
                    {title: "Andrey", id: v1()},
                    {title: "Pert", id: v1()},
                    {title: "Olga", id: v1()},
                    {title: "Sergey", id: v1()},
                ]}/>*/}
			{/*<Select
                id={v1()}
                collapsed={accordionCollapsed}
                onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                items={[
                    {title: "Andrey", id: v1()},
                    {title: "Pert", id: v1()},
                    {title: "Olga", id: v1()},
                    {title: "Sergey", id: v1()},
                ]}/>*/}
			{/* <OnOff indicator={indicator} setIndicator={setIndicator}/>

            <UncontrolledOnOff onChange={setIndicator}/> {indicator.toString()}
            <UncontrolledAccordion titleValue={"Список"}/>

            <UnControlledInput/>
            <TrackValueOfUncontrolledInput/>
            <GetValueOfUncontrolledInput/>
            <ControlledInputWithFixedValue/>
            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>*/}
			{/* <MySelect items={[
                          {title: "Andrey", id: v1()},
                          {title: "Petr", id: v1()},
                          {title: "Olga", id: v1()},
                          {title: "Sergey", id: v1()},
                      ]}/>
            <MySelect items={[
                          {title: "Andrey", id: v1()},
                          {title: "Petr", id: v1()},
                          {title: "Olga", id: v1()},
                          {title: "Sergey", id: v1()},
                      ]}/>*/}
			{/*<SelectByDimych id={'1'} collapsed={false} items={[
				{ title: "Andrey", id: v1() },
				{ title: "Petr", id: v1() },
				{ title: "Olga", id: v1() },
				{ title: "Sergey", id: v1() }]} />*/}

			{/*<UncontrolledAccordion titleValue={"Menu"} />*/}
			{/*<UncontrolledAccordion titleValue={"Users"} />*/}
			<UseMemo/>
			<HelpToUseMemo/>
			{/*<UncontrolledRating />*/}
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
