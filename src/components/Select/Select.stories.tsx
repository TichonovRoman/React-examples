import React, {useMemo, useState} from 'react';

import {action} from "@storybook/addon-actions";

import {ItemType, Select} from "./Select";
import {Simulate} from "react-dom/test-utils";
import loadedData = Simulate.loadedData;

export default {
    title: 'Select',
    component: Select
}

export const WithValue = () => {
    const [value, setValue] = useState("2")

    return <>
        <Select
            onChange={setValue}
            items={[
                {title: 'Moscow', value: "1"},
                {title: 'Kazan', value: "2"},
                {title: 'Voronezh', value: "3"},
                {title: 'Saratov', value: "4"},

            ]} value={value}/>
    </>
}


export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <Select
        value={value}
        onChange={setValue}
        items={[
            {title: 'Moscow', value: "1"},
            {title: 'Kazan', value: "2"},
            {title: 'Voronezh', value: "3"},
            {title: 'Saratov', value: "4"},

        ]}/>;

}

// export const MemoSelect = () => {
//     const [value, setValue] = useState(null)
//     const [counter, setCounter] = useState(0)
//
//     const setCounterHandler = () => setCounter(counter + 1)
//
//     const items: ItemType[] = [
//         {title: 'Moscow', value: "1", country: 1 },
//         {title: 'Kazan', value: "2", country: 1},
//         {title: 'Voronezh', value: "3", country: 1},
//         {title: 'Minsk', value: "4", country: 2},
//     ]
//     const filteredItems = useMemo(() => {
//         console.log("hhdhdhdh")
//         return (
//             items.filter(el => el.country === 1)
//         )
//         }, [items])
//
//
//     return <div>
//         <Select
//             value={value}
//             onChange={setValue}
//             items={filteredItems}/>
//         <span style={{marginRight: "20px"}}><button onClick={setCounterHandler}>+</button></span>
//         {counter}
//
//     </div>
//
//
//
//
// }

