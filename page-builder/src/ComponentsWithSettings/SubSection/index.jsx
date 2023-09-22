import react,{ useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';
import { VscAdd } from "react-icons/vsc";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { Grid, 
    Typography, 
    Divider, 
    FormGroup, 
    FormControlLabel, 
    Checkbox,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Box
} from '@mui/material';
import { addSetting, activeSection } from "../../Redux/Actions/BuildActions";

function SubSection({id, drawer, setDrawer, setOpenSnackbar, setMessage, setSnackbarType, modal, setModal}){
    const dispatch = useDispatch()
    const [flex, setFlex] = useState('flex');
    const [flexVar, setFlexVar] = useState('flex');
    const [flexWrap, setFlexWrap] = useState('wrap');
    const [flexDir, setFlexDir] = useState('column');
    const [justifyContent, setJustifyContent] = useState('flex-start');
    const [alignItems, setAlignItems] = useState('flex-start');
    const [gap, setGap] = useState(0)
    const [columns, setColumns] = useState(1);
    const [spacing, setSpacing] = useState(1);

    useEffect(() => {
        dispatch(activeSection(id))
    },[])

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
        setDrawer(false)
    }

    const handleDiscard = (e) => {
        e.preventDefault();
        setSnackbarType('error')
        setDrawer(false)
        setOpenSnackbar(true)
        setMessage('Sub Section Setting discarded!')
    }

    return (
        <div className='layer-resolver-element'>
            <div className='component-setting-container'>
            <Grid container={true} className="d-flex flex-column">
                <Typography variant="h6" className="my-2">
                    Sub Section Settings
                </Typography>
                <Divider />
                <form onSubmit={handleSubmit}>
                    <div className='form-children-heading text-secondary'>Layout System</div>
                    <FormGroup className='my-2'>
                        <FormControlLabel control={<Checkbox checked={flex == 'flex'} onChange={() => setFlex('flex')}/>} label="Flex System" />
                        <FormControlLabel control={<Checkbox checked={flex == 'flex-grid'} onChange={() => setFlex('flex-grid')}/>} label="Row Column System" />
                    </FormGroup>
                    {flex == 'flex'? 
                        (
                            <FlexLayout 
                                flexVar={flexVar} 
                                setFlexVar={setFlexVar}
                                flexWrap={flexWrap}
                                setFlexWrap={setFlexWrap}
                                flexDir={flexDir}
                                setFlexDir={setFlexDir}
                                justifyContent={justifyContent}
                                setJustifyContent={setJustifyContent}
                                alignItems={alignItems}
                                setAlignItems={setAlignItems}
                                gap={gap}
                                setGap={setGap}
                                modal={modal}
                                setModal={setModal}
                            />
                        ):(
                        <>
                            {/* <FlexGridLayout flex={flex} setFlex={setFlex} columns={columns} setColumns={setColumns}/>
                            <GridChildrenComponent columns={columns} spacing={spacing} handleComponentAdd={handleComponentAdd}/> */}
                        </>
                        )
                    } 
                    <div className='form-submit-section'>
                        <Divider />
                       <div className='form-submit-buttons'>
                            <Button variant="outlined" onClick={handleDiscard}>Discard</Button>
                            <Button type="submit" variant="contained">Save</Button>
                       </div>
                    </div>
                </form>
            </Grid>
            </div>
        </div>
    )
}

export default SubSection;



function FlexLayout({flexVar, 
    setFlexVar, 
    flexWrap, 
    setFlexWrap,
    flexDir,
    setFlexDir, 
    justifyContent, 
    setJustifyContent,
    alignItems,
    setAlignItems, 
    gap, 
    setGap,
    modal, 
    setModal
}){
    return (
        <div className='children-form'>
            <div className='form-children-heading text-secondary py-2'>Flex System</div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='my-2'>
                <Grid item xs={6} md={6}>
                    <FormControl sx={{ width: "100%" }}>
                        <InputLabel id="flex-variation-label">Flex Variations</InputLabel>
                        <Select
                            labelId="flex-variation-label"
                            id="flex-variation-label"
                            label="Flex Variations"
                            value={flexVar}
                            onChange={(e) => setFlexVar(e.target.value)}
                        >
                            <MenuItem value={'flex'}>Flex</MenuItem>
                            <MenuItem value={'inline-flex'}>Inline Flex</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                    <FormControl sx={{ width: "100%" }}>
                        <InputLabel id="flex-variation-label">Flex Wrap</InputLabel>
                        <Select
                            labelId="flex-variation-label"
                            id="flex-variation-label"
                            label="Flex Wrap"
                            value={flexWrap}
                            onChange={(e) => setFlexWrap(e.target.value)}
                        >
                            <MenuItem value={'wrap'}>Flex Wrap</MenuItem>
                            <MenuItem value={'nowrap'}>No Wrap</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='my-2'>
            <Grid item xs={6} md={6}>
                <FormControl sx={{ width: "100%" }}>
                        <InputLabel id="flex-variation-label">Flex Direction</InputLabel>
                        <Select
                            labelId="flex-variation-label"
                            id="flex-variation-label"
                            label="Flex Direction"
                            value={flexDir}
                            onChange={(e) => setFlexDir(e.target.value)}
                        >
                            <MenuItem value={'column'}>Column</MenuItem>
                            <MenuItem value={'column-reverse'}>Column Reverse</MenuItem>
                            <MenuItem value={'row'}>Row</MenuItem>
                            <MenuItem value={'row-reverse'}>Row Reverse</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                    <FormControl sx={{ width: "100%" }}>
                        <InputLabel id="flex-variation-label">Justify Content</InputLabel>
                        <Select
                            labelId="flex-variation-label"
                            id="flex-variation-label"
                            label="Justify Content"
                            value={justifyContent}
                            onChange={(e) => setJustifyContent(e.target.value)}
                        >
                            <MenuItem value={'flex-start'}>Content Start</MenuItem>
                            <MenuItem value={'flex-end'}>Content End</MenuItem>
                            <MenuItem value={'center'}>Content Center</MenuItem>
                            <MenuItem value={'space-between'}>Content Between</MenuItem>
                            <MenuItem value={'space-around'}>Content Around</MenuItem>
                            <MenuItem value={'space-evenly'}>Content Evenly</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='my-2'>
            <Grid item xs={6} md={6}>
                <FormControl sx={{ width: "100%" }}>
                        <InputLabel id="flex-variation-label">Align Items</InputLabel>
                        <Select
                            labelId="flex-variation-label"
                            id="flex-variation-label"
                            label="Align Items"
                            value={alignItems}
                            onChange={(e) => setAlignItems(e.target.value)}
                        >
                            <MenuItem value={'flex-start'}>Align Start</MenuItem>
                            <MenuItem value={'flex-end'}>Align End</MenuItem>
                            <MenuItem value={'center'}>Align Center</MenuItem>
                            <MenuItem value={'baseline'}>Align Baseline</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                    <FormControl sx={{ width: "100%" }}>
                        <TextField
                            type="number"
                            label="Gap"
                            value={gap}
                            onChange={(e) => setGap(e.target.value)}
                        />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container>
                <div className='form-children-heading text-secondary py-2'>Add Child Component in Sub Section</div>
                <Grid item xs={12} md={12} onClick={() => setModal(true)}>
                    <div className='add-component-container'>
                        <AiOutlineAppstoreAdd/>
                        <span>Add Component to SubSection</span>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

// function FlexGridLayout({flex, setFlex, columns, setColumns}){
//     return (
//         <div className='children-form'>
//             <div className='form-children-heading text-secondary'>Row Column System</div>
//             <Row className="mb-3">
//                 <Form.Group className='my-1' as={Col} controlId="formGridState">
//                     <Form.Check
//                         inline
//                         label="Row"
//                         name="group1"
//                         checked={true}
//                         onChange={() => setFlex('flex')}
//                     />
//                 </Form.Group>
//             </Row>
//             <Row className="mb-3">
//                 <Form.Group as={Col} controlId="formGridState">
//                     <Form.Label>Number of Columns</Form.Label>
//                     <Form.Select defaultValue={columns} onChange={e => setColumns(e.target.value)}>
//                         <option>1</option>
//                         <option>2</option>
//                         <option>3</option>
//                         <option>4</option>
//                         <option>5</option>
//                         <option>6</option>
//                         <option>7</option>
//                         <option>8</option>
//                         <option>9</option>
//                         <option>10</option>
//                         <option>11</option>
//                         <option>12</option>
//                     </Form.Select>
//                 </Form.Group>
//                 <Form.Group as={Col} controlId="formGridState">
//                     <Form.Label>Spacing</Form.Label>
//                     <Form.Select defaultValue="1">
//                         <option>1</option>
//                         <option>2</option>
//                         <option>3</option>
//                         <option>4</option>
//                         <option>5</option>
//                         <option>6</option>
//                         <option>7</option>
//                         <option>8</option>
//                         <option>9</option>
//                         <option>10</option>
//                         <option>11</option>
//                         <option>12</option>
//                     </Form.Select>
//                 </Form.Group>
//             </Row>
//         </div>
//     )
// }


// function GridChildrenComponent({columns, spacing, handleComponentAdd}){
//     const [items, setItems] = useState([])
//     let arr = []
//     for(let i = 1; i <= columns; i++) arr.push(i)

//     const [{ isOver }, drop] = useDrop(() => ({
//         accept: 'Sub Section',
//         drop: (item) => {
//             setItems(item)
//             handleComponentAdd(item)
//         },
//         collect: monitor => ({
//           isOver: !!monitor.isOver(),
//         }),
//       }), [])

//     if(items.length == 0){
//         return(
//             <Row>
//                 {
//                     arr.map(i => {
//                         return <Col className="col-container" key={i} ref={drop}>
//                             <VscAdd/> Add Component/SubSection
//                         </Col>
//                     })
//                 }
//             </Row>
//         )
//     }else{
//         <Row>
//                 {
//                     items.map(item => {
//                         return <Col className="col-container" key={item.id} ref={drop}>
//                             <VscAdd/> Add Component/SubSection
//                         </Col>
//                     })
//                 }
//             </Row>
//     }
// }