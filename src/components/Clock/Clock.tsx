import React, {useEffect, useState} from "react";
import {AnalogClockView} from "./AnalogClockView";
import {DigitalClockView} from "./DigitalClockView";

type PropsType = {
    mode: "digital" | "analog"
}



export const Clock: React.FC<PropsType> = (props) => {

    const [date, setData] = useState(new Date())

    useEffect(() => {
        let a = setInterval(() => setData(new Date()), 1000)
        // return clearInterval(a)
    }, [])

    let view

    switch (props.mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break
        case "digital":
        default:
            view = <DigitalClockView date={date}/>
    }

    return <div>
        {view}

    </div>
}

export type ClockViewPropsType = {
    date: Date,
}



