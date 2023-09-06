import react,{ useState } from 'react';
import { useDispatch } from "react-redux";
import {Form,Button} from 'react-bootstrap';
import { addSetting } from "../../Redux/Actions/BuildActions"

function Section({id}){
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
                <Form.Check
                    inline
                    label="container"
                    name="group1"
                    checked={container == 'container'}
                    onChange={() => setContainer('container')}
                />
                <Form.Check
                    inline
                    label="fluid-container"
                    name="group1"
                    checked={container == 'fluid-container'}
                    onChange={() => setContainer('fluid-container')}
                />
                <div className='submit-btn-conatiner'>
                    <Button type='submit' size="sm">Save Setting</Button>
                </div>
            </Form>
        </div>
    )
}

export default Section;