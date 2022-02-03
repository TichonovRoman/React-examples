import React from "react";

export type AccordionPropsType = {
    titleValue: string,
    /**
     * Boolean
     */
    collapsed: boolean
    onChange: () => void
    /**
     * optional color of header
     */
    color?: string
}

export function Accordion(props: AccordionPropsType) {

    console.log('Accordion rendering')

        return <div>
            <AccordionTitle title={props.titleValue} color = {props.color} collapsed = {props.collapsed} onChange = {props.onChange}/>
            { !props.collapsed && <AccordionBody/>}
            {/*{ props.collapsed===false && <AccordionBody/>} - тоже самое*/}
            {/* т.е. если здесь тру, то идем дальше и отрисовываем тэг Аккордион*/}
        </div>
}


type AccordionTitlePropsTitle = {
    title: string
    collapsed: boolean
    onChange: () => void
    color?: string

}

function AccordionTitle(props: AccordionTitlePropsTitle) {
    console.log('AccordionTitle rendered')
    return <h3
        style = {{color: props.color ? props.color : "black"}}
        onClick={(e)=>props.onChange()}>---{props.title}---</h3>

}

function AccordionBody() {
    console.log('AccordionBody rendered')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}
