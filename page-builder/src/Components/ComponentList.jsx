import react from 'react';
import { useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';
import { VscAdd } from "react-icons/vsc";
import { useDrag } from 'react-dnd';
import { RiDraggable } from "react-icons/ri";
import { components } from "../Data/Components";
import { addLayers, addSection, activeSection } from "../Redux/Actions/BuildActions";

function ComponentList(){
    const dispatch = useDispatch()
    const handleComponentAdd = (component, id) =>{
        if(component === 'section'){
            dispatch(addSection({component, id, layer:[]}))
            dispatch(activeSection(id))
        }else{
            //dispatch(addLayers({component, id}))
        }
    }
    return (
        <div className='component-list'>
            <div className='component-list-header'>Components</div>
            <div className='component-list-column'>
                {components.map(item => <Component key={item.id} handleComponentAdd={handleComponentAdd} item={item}/>)}
            </div>
        </div>
    )
}

export default ComponentList;



function Component({item, handleComponentAdd}){
    const [{isDragging}, drag] = useDrag(() => ({
        type: item.component,
        item: item,
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
      }))
    return(
        <div className='component-container d-flex justify-content-between' ref={drag}>
            <div className='left-side-component-container d-flex'>
                <div className='component-container-icon px-2'>{<RiDraggable/>}</div>
                <div className='component-container-label'>{item.component}</div>
            </div>
            <div className='right-side-component-container cursor-pointer' 
                onClick={() => handleComponentAdd(item.layer, uuid())}>
                <VscAdd/>
            </div>
        </div>
    )
}