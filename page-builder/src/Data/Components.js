import { v4 as uuid } from 'uuid';
import { VscSymbolConstant, VscSymbolEnum, VscBold } from "react-icons/vsc";

export const components = [
    {
        id:uuid(),
        label:'Section',
        component:'section',
        icon:<VscSymbolConstant/>,
        layers:[]
    }
]

export const childComponents = [
    {
        id:uuid(),
        label:'Sub Section',
        component:'sub-section',
        icon:<VscSymbolEnum/>,
        layers:[]
    },
    {
        id:uuid(),
        label:'Accordion',
        component:'accordion',
        icon:<VscSymbolEnum/>,
        layers:[]
    },
    {
        id:uuid(),
        label:'Card',
        component:'card',
        icon:<VscSymbolEnum/>,
        layers:[]
    },
    {
        id:uuid(),
        label:'Date Picker',
        component:'date-picker',
        icon:<VscSymbolEnum/>,
    },
    {
        id:uuid(),
        label:'Button',
        component:'button',
        icon:<VscBold/>
    },
    {
        id:uuid(),
        label:'Input',
        component:'input',
        icon:<VscBold/>
    },
    {
        id:uuid(),
        label:'Modal',
        component:'modal',
        icon:<VscBold/>
    },
    {
        id:uuid(),
        label:'Radio Buttons',
        component:'radio-button',
        icon:<VscBold/>
    },
    {
        id:uuid(),
        label:'Select',
        component:'select',
        icon:<VscBold/>
    },
    {
        id:uuid(),
        label:'Switch',
        component:'switch',
        icon:<VscBold/>
    },
    {
        id:uuid(),
        label:'Tabs',
        component:'tabs',
        icon:<VscBold/>
    }
]