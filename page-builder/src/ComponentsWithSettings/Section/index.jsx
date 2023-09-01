import react from 'react';
import Form from 'react-bootstrap/Form';

function Section(){
    return (
        <div className='layer-resolver-element'>
            <Form>
                <Form.Check
                    inline
                    label="1"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                />
                <Form.Check
                    inline
                    label="2"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                />
            </Form>
        </div>
    )
}

export default Section;