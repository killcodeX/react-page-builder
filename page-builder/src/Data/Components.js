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

// {
//         id:uuid(),
//         component:'Sub Section',
//         layer:'sub-section',
//         icon:<VscSymbolEnum/>
//     },
//     {
//         id:uuid(),
//         component:'Button',
//         layer:'button',
//         icon:<VscBold/>
//     }