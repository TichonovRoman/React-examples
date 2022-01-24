import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
    //collapsed: boolean
}

function UnconrolledAccordion(props: AccordionPropsType) {

    console.log('Accordion rendering')

    let [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={props.titleValue}/>
        <button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>
        {!collapsed && <AccordionBody/>}
    </div>
}


type AccordionTitlePropsTitle = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsTitle) {
    console.log('AccordionTitle rendered')
    return <h3>{props.title}</h3>

}

function AccordionBody() {
    console.log('AccordionBody rendered')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}


export default UnconrolledAccordion;