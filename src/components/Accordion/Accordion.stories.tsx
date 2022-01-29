import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('accordion mode event fired')

export const MenuCollapsedMode = () => <Accordion collapsed={true} onChange={callback} titleValue={'Menu'}/>;
export const UsersUncollapsedMode = () => <Accordion collapsed={false} onChange={callback} titleValue={'Users'}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion collapsed={value} onChange={()=>setValue(!value)} titleValue={'14'}/>
};

