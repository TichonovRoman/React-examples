import {useEffect, useState} from "react";


export default {
    title: "useState demo"
}

function generation() {
    console.log("generation")
    return 1
}

export const Example1 = () => {
    console.log("Example1")

    const changeCount = (state: number) => state + 1


    const [counter, setCounter] = useState(generation)

    useEffect(()=>{
        console.log("useEffect срабатывает всегда")
        document.title = counter.toString()
    })
    useEffect(()=>{
        console.log("useEffect срабатывает только при первой отрисовке")
        document.title = counter.toString()
    }, [])
    useEffect(()=>{
        console.log("useEffect срабатывает при 1 отрисовке и каждый раз при изменении counter")
        document.title = counter.toString()
    }, [counter])







    return <>
    <button onClick={()=>setCounter(changeCount)}>+</button>
        {counter}
    </>
}
export const SetTimeoutExample = () => {
    console.log("SetTimeoutExample")
    const [counter, setCounter] = useState(1)


    const changeCount = (state: number) => state + 1

    const [hours, setHours] = useState(0)
    const [minuts, setMinuts] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(()=>{
        setInterval(() => {
            let a = new Date()
            setHours(a.getHours())
            setMinuts(a.getMinutes())
            setSeconds(a.getSeconds())
           setCounter((state) => state + 1)
        }, 1000)
    }, [])



    return <>
    <button onClick={()=>setCounter(changeCount)}>+</button>
        {hours}:{minuts}:{seconds}
    </>
}