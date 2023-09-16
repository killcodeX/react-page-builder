import react,{ useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';
import {Form, Row, Col} from 'react-bootstrap';
import { VscAdd } from "react-icons/vsc";
import { useDrop } from 'react-dnd'
import { addSetting } from "../../Redux/Actions/BuildActions";

function SubSection({id}){
    const dispatch = useDispatch()
    const [flex, setFlex] = useState('flex');
    const [columns, setColumns] = useState(1);
    const [spacing, setSpacing] = useState(1);

    const handleComponentAdd = (item) =>{
        console.log('received Item', item)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // let obj = {
        //     component:'section',
        //     id,
        //     containerType:container
        // }
        //dispatch(addSetting(obj))
    }
    return (
        <div className='layer-resolver-element'>
            <Form onSubmit={handleSubmit}>
                <div className='form-heading text-secondary'>Layout System</div>
                <Form.Check
                    inline
                    label="Flex"
                    name="group1"
                    checked={flex == 'flex'}
                    onChange={() => setFlex('flex')}
                />
                <Form.Check
                    inline
                    label="Flexbox Grid"
                    name="group1"
                    checked={flex == 'flexbox-grid'}
                    onChange={() => setFlex('flexbox-grid')}
                />
                {
                    flex == 'flex'? 
                    (
                    <FlexLayout flex={flex} setFlex={setFlex}/>
                    ):(
                    <>
                        <FlexGridLayout flex={flex} setFlex={setFlex} columns={columns} setColumns={setColumns}/>
                        <GridChildrenComponent columns={columns} spacing={spacing} handleComponentAdd={handleComponentAdd}/>
                    </>
                    )
                }
            </Form>
        </div>
    )
}

export default SubSection;



function FlexLayout({flex, setFlex}){
    return (
        <div className='children-form'>
            <div className='form-children-heading text-secondary'>Flex System</div>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Flex Variations</Form.Label>
                    <Form.Select defaultValue="Flex">
                        <option>Flex</option>
                        <option>Inline Flex</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Justify Content</Form.Label>
                    <Form.Select defaultValue="Content Start">
                        <option>Content Start</option>
                        <option>Content End</option>
                        <option>Content Center</option>
                        <option>Content Between</option>
                        <option>Content Around</option>
                        <option>Content Evenly</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Align items</Form.Label>
                    <Form.Select defaultValue="Start">
                        <option>Start</option>
                        <option>End</option>
                        <option>Center</option>
                        <option>Baseline</option>
                        <option>Stretch</option>
                    </Form.Select>
                </Form.Group>
            </Row>
        </div>
    )
}

function FlexGridLayout({flex, setFlex, columns, setColumns}){
    return (
        <div className='children-form'>
            <div className='form-children-heading text-secondary'>Row Column System</div>
            <Row className="mb-3">
                <Form.Group className='my-1' as={Col} controlId="formGridState">
                    <Form.Check
                        inline
                        label="Row"
                        name="group1"
                        checked={true}
                        onChange={() => setFlex('flex')}
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Number of Columns</Form.Label>
                    <Form.Select defaultValue={columns} onChange={e => setColumns(e.target.value)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Spacing</Form.Label>
                    <Form.Select defaultValue="1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </Form.Select>
                </Form.Group>
            </Row>
        </div>
    )
}


function GridChildrenComponent({columns, spacing, handleComponentAdd}){
    const [items, setItems] = useState()
    let arr = []
    for(let i = 1; i <= columns; i++) arr.push(i)

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'Sub Section',
        drop: (item) => {
            setItems(item)
            handleComponentAdd(item)
        },
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
      }), [])

    return(
        <Row>
            {
                arr.map(i => {
                    return <Col className="col-container" key={i} ref={drop}>
                        <VscAdd/> Add Component
                    </Col>
                })
            }
        </Row>
    )
}