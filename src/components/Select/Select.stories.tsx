import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";

import {Select} from "./Select";

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

