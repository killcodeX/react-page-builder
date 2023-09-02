import react from 'react';
import { useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';
import { VscAdd } from "react-icons/vsc";
import { components } from "../Data/Components";
import { addLayers, addSection, activeSection } from "../Redux/Actions/BuildActions";

function ComponentList(){
    const dispatch = useDispatch()
    const handleComponentAdd = (component, id) =>{
        if(component === 'section'){
            dispatch(addSection({component, id, layer:[]}))
            dispatch(activeSection(id))
        }else{
            dispatch(addLayers({component, id}))
        }
    }
    return (
        <div className='component-list'>
            <div className='component-list-header'>Components</div>
            <div className='component-list-column'>
                {
                    components.map(item =>{
                        return(
                            <div className='component-container d-flex justify-content-between' key={item.id}>
                                <div className='left-side-component-container d-flex'>
                                    <div className='component-container-icon px-2'>{item.icon}</div>
                                    <div className='component-container-label'>{item.component}</div>
                                </div>
                                <div className='right-side-component-container cursor-pointer' 
                                    onClick={() => handleComponentAdd(item.layer, uuid())}>
                                    <VscAdd/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ComponentList;