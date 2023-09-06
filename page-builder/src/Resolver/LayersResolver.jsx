import react,{ useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Accordion from 'react-bootstrap/Accordion';
import { Section } from "../ComponentsWithSettings";

function LayersResolver({layer}){
    console.log("this is layer -->", layer)
    return (
        <div className='layer-resolver-elements my-2'>
            {resolver(layer)}
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
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Section</Accordion.Header>
                        <Accordion.Body>
                            <Section id={layer.id}/>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )
        case "sub-section":
            return (
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Sub Section</Accordion.Header>
                        <Accordion.Body>
                            This is Sub Section Component
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )
        case "button":
            return (
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Button</Accordion.Header>
                        <Accordion.Body>
                            This is Button Component
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )
}
}