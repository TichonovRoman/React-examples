import React, {useEffect, useState} from "react";

type PropsType = {}

const get2digitsString = (num: number) => num < 10
    ? "0" + num
    : num

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setData] = useState(new Date())

    useEffect(() => {
        let a =setInterval(() => setData(new Date()), 1000)
        return clearInterval(a)
    }, [])


    const secondsString = get2digitsString(date.getSeconds())
    const minutesString = get2digitsString( date.getMinutes())
    const hoursString = get2digitsString(date.getHours())


    return <div>
        <span>{hoursString}</span>
        :
        <span>{minutesString}</span>
        :
        <span>{secondsString}</span>
    </div>
}