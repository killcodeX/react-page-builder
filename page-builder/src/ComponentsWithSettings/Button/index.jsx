import react,{ useState } from 'react';
import { useDispatch } from "react-redux";
import {Form, Row, Col} from 'react-bootstrap';
import { addSetting } from "../../Redux/Actions/BuildActions"

function ButtonLayer({id}){
    const dispatch = useDispatch()
    const [container, setContainer] = useState('container');

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            component:'section',
            id,
            containerType:container
        }
        dispatch(addSetting(obj))
    }
    return (
        <div className='layer-resolver-element'>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Button Text</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Variant</Form.Label>
                    <Form.Select defaultValue="Primary">
                        <option>Primary</option>
                        <option>Outlined</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Size</Form.Label>
                    <Form.Select defaultValue="Large">
                        <option>Large</option>
                        <option>Small</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            </Form>
        </div>
    )
}

export default ButtonLayer;