import react, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { VscAdd } from "react-icons/vsc";
import {
  Grid,
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
  Box,
} from "@mui/material";
import { addSetting, activeSection } from "../../Redux/Actions/BuildActions";
import FlexLayout from "./FlexLayout";
import RowColumnLayout from "./RowColumnLayout";

function SubSection({
  id,
  drawer,
  setDrawer,
  setOpenSnackbar,
  setMessage,
  setSnackbarType,
  modal,
  setModal,
}) {
  const dispatch = useDispatch();
  const [flex, setFlex] = useState("flex");
  const [flexVar, setFlexVar] = useState("flex");
  const [flexWrap, setFlexWrap] = useState("wrap");
  const [flexDir, setFlexDir] = useState("column");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("flex-start");
  const [gap, setGap] = useState(0);
  const [columns, setColumns] = useState(1);
  const [spacing, setSpacing] = useState(1);

  useEffect(() => {
    dispatch(activeSection(id));
  }, []);

  const handleComponentAdd = (item) => {
    console.log("received Item", item);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // let obj = {
    //     component:'section',
    //     id,
    //     containerType:container
    // }
    //dispatch(addSetting(obj))
    setDrawer(false);
  };

  const handleDiscard = (e) => {
    e.preventDefault();
    setSnackbarType("error");
    setDrawer(false);
    setOpenSnackbar(true);
    setMessage("Sub Section Setting discarded!");
  };

  return (
    <div className="layer-resolver-element">
      <div className="component-setting-container">
        <Grid container={true} className="d-flex flex-column">
          <Typography variant="h6" className="my-2">
            Sub Section Settings
          </Typography>
          <Divider />
          <form onSubmit={handleSubmit}>
            <div className="form-children-heading text-secondary">
              Layout System
            </div>
            <FormGroup className="my-2">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={flex == "flex"}
                    onChange={() => setFlex("flex")}
                  />
                }
                label="Flex System"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={flex == "flex-grid"}
                    onChange={() => setFlex("flex-grid")}
                  />
                }
                label="Row Column System"
              />
            </FormGroup>
            {flex == "flex" ? (
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
            ) : (
              <>
                <RowColumnLayout
                  columns={columns}
                  setColumns={setColumns}
                  spacing={spacing}
                  setSpacing={setSpacing}
                  modal={modal}
                  setModal={setModal}
                />
              </>
            )}
            <div className="form-submit-section">
              <Divider />
              <div className="form-submit-buttons">
                <Button variant="outlined" onClick={handleDiscard}>
                  Discard
                </Button>
                <Button type="submit" variant="contained">
                  Save
                </Button>
              </div>
            </div>
          </form>
        </Grid>
      </div>
    </div>
  );
}
export default SubSection;

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
