import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import UncontrolledAccordion from "./UnconrolledAccordion";


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
}

export const ModeChanging = () => {
    return <UncontrolledAccordion titleValue={'Users'}/>
};

