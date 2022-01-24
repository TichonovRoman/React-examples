import React, {useState} from "react";

type RatingPropsType = {
    // selected:boolean
    // setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}


export function UncontrolledRating(props: RatingPropsType) {

    let [value, setValue] = useState(0)


    return (
        <div>
            <Star selected={value > 0} setValue = {setValue} />
            <Star selected={value > 1} setValue = {setValue}/>
            <Star selected={value > 2} setValue = {setValue}/>
            <Star selected={value > 3} setValue = {setValue}/>
            <Star selected={value > 4} setValue = {setValue}/>
        </div>
    )


}

type StarPropsType = {
    selected: boolean
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    // return props.selected ? <span><b>star </b></span> : <span>star </span>


    return <span onClick={()=> {props.setValue(5)}}>
        {props.selected ? <b>star </b> : "star"}
    </span>
}