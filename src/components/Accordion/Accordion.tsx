import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange: () => void
}

export function Accordion(props: AccordionPropsType) {

    console.log('Accordion rendering')

        return <div>
            <AccordionTitle title={props.titleValue} collapsed = {props.collapsed} onChange = {props.onChange}/>
            { !props.collapsed && <AccordionBody/>}
            {/*{ props.collapsed===false && <AccordionBody/>} - тоже самое*/}
            {/* т.е. если здесь тру, то идем дальше и отрисовываем тэг Аккордион*/}
        </div>
}


type AccordionTitlePropsTitle = {
    title: string
    collapsed: boolean
    onChange: () => void

}

function AccordionTitle(props: AccordionTitlePropsTitle) {
    console.log('AccordionTitle rendered')
    return <h3 onClick={(e)=>props.onChange()}>---{props.title}---</h3>

}

function AccordionBody() {
    console.log('AccordionBody rendered')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}
