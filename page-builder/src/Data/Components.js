import { v4 as uuid } from 'uuid';
import { VscSymbolConstant, VscSymbolEnum, VscBold } from "react-icons/vsc";

export const components = [
    {
        id:uuid(),
        component:'Section',
        layer:'section',
        icon:<VscSymbolConstant/>
    }
]

export const childComponents = [
    {
        id:uuid(),
        component:'Sub Section',
        layer:'sub-section',
        icon:<VscSymbolEnum/>
    },
    {
        id:uuid(),
        component:'Accordion',
        layer:'accordion',
        icon:<VscSymbolEnum/>
    },
    {
        id:uuid(),
        component:'Card',
        layer:'card',
        icon:<VscSymbolEnum/>
    },
    {
        id:uuid(),
        component:'Card',
        layer:'card',
        icon:<VscSymbolEnum/>
    },
    {
        id:uuid(),
        component:'Date Picker',
        layer:'date-picker',
        icon:<VscSymbolEnum/>
    },
    {
        id:uuid(),
        component:'Date Picker',
        layer:'date-picker',
        icon:<VscSymbolEnum/>
    },
    {
        id:uuid(),
        component:'Button',
        layer:'button',
        icon:<VscBold/>
    },
    {
        id:uuid(),
        component:'Input',
        layer:'input',
        icon:<VscBold/>
    },
    {
        id:uuid(),
        component:'Modal',
        layer:'modal',
        icon:<VscBold/>
    },
    {
        id:uuid(),
        component:'Radio Buttons',
        layer:'radio-button',
        icon:<VscBold/>
    },
    {
        id:uuid(),
        component:'Select',
        layer:'select',
        icon:<VscBold/>
    },
    {
        id:uuid(),
        component:'Switch',
        layer:'switch',
        icon:<VscBold/>
    },
    {
        id:uuid(),
        component:'Tabs',
        layer:'tabs',
        icon:<VscBold/>
    }
]