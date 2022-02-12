import React, {useState} from "react";


type ItemType = {
    title: string,
    value: any
}

type SelectPropsType = {
    // value: any
    onChange: (value: any)=> void
    items: ItemType[]
}


export function Select(props: SelectPropsType) {

    let [state, setState] = useState(false)
    let [city, setCity] = useState(props.items[0].title)

    let onState = () => setState(true)
    let setCityHandler = (title: string) => {
        setCity(title)
        setState(false)
    }

    return (
        <div>
            <div onClick={onState}>{city}</div>

            {state && props.items.map(i => <div onClick={()=>setCityHandler(i.title)}>{i.title}</div>)}
        </div>
    )


}

