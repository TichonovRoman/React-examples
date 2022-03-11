import {useState} from "react";


export default {
    title: "useState demo"
}

function generation() {
    console.log("generation")
    return 4345466
}

export const Example1 = () => {
    console.log("Example1")

    const [counter, setCounter] = useState(generation)

    const changeCount = (state: number) => {
        return state + 1
    }

    return <>
    <button onClick={()=>setCounter(changeCount)}>+</button>
        {counter}
    </>
}