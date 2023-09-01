import react,{ useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Accordion from 'react-bootstrap/Accordion';

function LayersResolver({layer}){
    return (
        <div className='layer-resolver-elements my-2'>
            {resolver(layer)}
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
                            This is Section Component
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