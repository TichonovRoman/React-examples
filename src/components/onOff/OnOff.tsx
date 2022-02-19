import React, {useState} from 'react';
import "./OnOff.css"

type PropsType = {
    on: boolean
    onChange: (on:boolean) => void
}

let on = false



const OnOffForMemo = (props: PropsType) => {


    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white",
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.on ? "white" : "red",
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red",
    }



        return (
            <div>
                <div style={onStyle} onClick={() => {props.onChange(true)}}>On</div>
                <div style={offStyle} onClick= {() => {props.onChange(false)}}>Off</div>
                <div style={indicatorStyle}></div>


                {/*<div id="onId" className="on">On</div>*/}
                {/*<div id="offId" className="off">Off</div>*/}
                {/*<div id="lamp"></div>*/}
            </div>
        )

    }

export const OnOff = React.memo(OnOffForMemo)