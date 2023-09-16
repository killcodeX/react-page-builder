import react,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Accordion from 'react-bootstrap/Accordion';
import { Section, SubSection, Button } from "../ComponentsWithSettings";
import { activeSection } from "../Redux/Actions/BuildActions";

function LayersResolver({layer}){
    const dispatch = useDispatch()
    const activeId = useSelector(state => state.build.activeSection);
    return (
        <div className='layer-resolver-elements my-2'>
            <Accordion activeKey={activeId} onSelect={(id) => dispatch(activeSection(id))}>
                {resolver(layer)}
            </Accordion>
            {
                layer?.layer?.length > 0 && layer.layer.map(item =>{
                    return (
                        <div className="children">
                            <LayersResolver key={item.id} layer={item}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LayersResolver;

function resolver(layer){
    switch(layer.component){
        case "section":
            return (
                    <Accordion.Item eventKey={layer.id}>
                        <Accordion.Header>Section</Accordion.Header>
                        <Accordion.Body>
                            <Section id={layer.id}/>
                        </Accordion.Body>
                    </Accordion.Item>
            )
        case "sub-section":
            return (
                    <Accordion.Item eventKey={layer.id}>
                        <Accordion.Header>Sub Section</Accordion.Header>
                        <Accordion.Body>
                            <SubSection id={layer.id}/>
                        </Accordion.Body>
                    </Accordion.Item>
            )
        case "button":
            return (
                    <Accordion.Item eventKey={layer.id}>
                        <Accordion.Header>Button</Accordion.Header>
                        <Accordion.Body>
                            <Button id={layer.id}/>
                        </Accordion.Body>
                    </Accordion.Item>
            )
}
}