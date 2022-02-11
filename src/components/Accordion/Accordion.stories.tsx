import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";


export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: "color"
        }
    }
}

const callback = action('accordion mode event fired')
const onClickcallback = action('some item was clicked')


const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

const callbacksProps = {
    onChange: callback,
}


export const MenuCollapsedMode = Template.bind({});

MenuCollapsedMode.args = {
    ...callbacksProps,
    collapsed: true,
    titleValue: 'Menu',
    items: [],
    onClick: onClickcallback

}


export const UsersUncollapsedMode = Template.bind({});

UsersUncollapsedMode.args = {
    ...callbacksProps,
    collapsed: false,
    titleValue: 'Users',
    items: [{title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Roman', value: 3}],
    onClick: onClickcallback


}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)


    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
};

ModeChanging.args = {
    titleValue: '14',
    items: [{title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Roman', value: 3}],
    onClick: (value) => {alert(`user with ID ${value} should be happy`)}

}