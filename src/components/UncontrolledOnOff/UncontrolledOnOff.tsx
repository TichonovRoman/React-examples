import React, {useState} from 'react';
import "./UncontrolledOnOff.css"

type PropsType = {
    onChange: (on: boolean) => void
}

let on = false



const UncontrolledOnOff = (props: PropsType) => {
    let [on, setOn] = useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white",
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red",
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red",
    }

const onClicked = () => {
    setOn(true)
    props.onChange(true)
}

const offClicked = () => {
    setOn(false)
    props.onChange(false)
}



        return (
            <div>
                <div style={onStyle} onClick={onClicked}>On</div>
                <div style={offStyle} onClick= {offClicked}>Off</div>
                <div style={indicatorStyle}></div>


                {/*<div id="onId" className="on">On</div>*/}
                {/*<div id="offId" className="off">Off</div>*/}
                {/*<div id="lamp"></div>*/}
            </div>
        )

    }

    export default UncontrolledOnOff;