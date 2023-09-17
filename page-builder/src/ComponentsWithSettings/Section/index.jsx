import react,{ useState } from 'react';
import { useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';
import { Grid, 
    Typography, 
    Divider, 
    FormGroup, 
    FormControlLabel, 
    Checkbox,
    Button 
} from '@mui/material';
import { addSectionSetting } from "../../Redux/Actions/BuildActions";

function Section({id}){
    const dispatch = useDispatch()
    const [container, setContainer] = useState('container');
    const [subSection, setSubSection] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            component:'section',
            id,
            containerType:container,
            layer: {
                id:uuid(),
                component: "sub-section"
            }
        }
        dispatch(addSectionSetting(obj))
    }
    return (
        <div className='layer-resolver-element'>
            <div className='component-setting-container'>
            <Grid container={true} className="d-flex flex-column">
                <Typography variant="h6" className="my-2">
                    Section Settings
                </Typography>
                <Divider />
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={container == 'container'} onChange={() => setContainer('container')}/>} label="Container" />
                        <FormControlLabel control={<Checkbox checked={container == 'fluid-container'} onChange={() => setContainer('fluid-container')}/>} label="Fluid Container" />
                        <FormControlLabel control={<Checkbox checked={subSection} onChange={() => setSubSection(!subSection)}/>} label="Add a Sub Section" />
                    </FormGroup>
                    <div className='form-submit-section'>
                        <Divider />
                       <div className='form-submit-buttons'>
                            <Button variant="outlined">Discard</Button>
                            <Button type="submit" variant="contained">Save</Button>
                       </div>
                    </div>
                </form>
            </Grid>
            </div>
        </div>
    )
}

export default Section;