import React, {useReducer, useState} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string,
}


const UncontrolledAccordion = React.memo(UncontrolledAccordionForMemo)


function UncontrolledAccordionForMemo(props: AccordionPropsType) {

    console.log('Accordion rendering')

    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return <div>
        <AccordionTitle title={props.titleValue} onClick = {() => dispatch({type: TOGGLE_COLLAPSED})}/>

        {!state.collapsed && <AccordionBody/>}
    </div>
}


type AccordionTitlePropsTitle = {
    title: string
    onClick: () => void
}

const AccordionTitle = React.memo(AccordionTitleForMemo)

function AccordionTitleForMemo(props: AccordionTitlePropsTitle) {
    console.log('AccordionTitle rendered')
    return <h3 onClick={props.onClick}>{props.title}</h3>

}

const AccordionBody = React.memo(AccordionBodyForMemo)

function AccordionBodyForMemo() {
    console.log('AccordionBody rendered')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}


export default UncontrolledAccordion;