import React from "react";

type ItemType = {
    title: string,
    value: any
}

export type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange: () => void
    color?: string
    items: ItemType[]
    onClick: (value: any) => void
}

export const Accordion = React.memo(Accordion1)

function Accordion1(props: AccordionPropsType) {

    console.log('Accordion rendering')

        return <div>
            <AccordionTitle title={props.titleValue} color = {props.color} collapsed = {props.collapsed} onChange = {props.onChange}/>
            { !props.collapsed && <AccordionBody items = {props.items} onClick={props.onClick}/>}
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

const AccordionTitle = React.memo(AccordionTitle1)

function AccordionTitle1(props: AccordionTitlePropsTitle) {
    console.log('AccordionTitle rendered')
    return <h3
        style = {{color: props.color ? props.color : "black"}}
        onClick={(e)=>props.onChange()}>---{props.title}---</h3>

}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBody = React.memo(AccordionBody1)

function AccordionBody1(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendered')
    return <ul>
        {props.items.map((i, index) => <li onClick={()=> {props.onClick(i.value)}} key={index}>{i.title}</li>)}
    </ul>

}
