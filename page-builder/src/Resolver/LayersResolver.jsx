import react,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Card, Typography, IconButton, Drawer } from '@mui/material';
import SnackBar from "../Utils/SnackBar";
import { CiEdit } from "react-icons/ci";
import { Section, SubSection, ButtonLayer } from "../ComponentsWithSettings";
import ComponentModal from "../Components/ComponentModals";

function LayersResolver({layer}){
    const dispatch = useDispatch()
    const [drawer, setDrawer] = useState(false);
    const [modal, setModal] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarType, setSnackbarType] = useState('success');
    const [message, setMessage] = useState('');
    const activeId = useSelector(state => state.build.activeSection);
    return (
        <div className='layer-resolver-elements my-2'>
                {resolver(layer, drawer, setDrawer, setOpenSnackbar, setMessage, setSnackbarType, modal, setModal)}
            {
                layer?.layers?.length > 0 && layer.layers.map(item =>{
                    return (
                        <div className="children">
                            <LayersResolver 
                                key={item.id} 
                                layer={item}
                            />
                        </div>
                    )
                })
            }
            <SnackBar 
                openSnackbar={openSnackbar} 
                message={message}
                setOpenSnackbar={setOpenSnackbar}
                type={snackbarType}
            />
            <ComponentModal open={modal} setOpen={setModal}/>
        </div>
    )
}

export default LayersResolver;

function resolver(layer, drawer, setDrawer, setOpenSnackbar, setMessage, setSnackbarType, modal, setModal){
    console.log(layer)
    switch(layer.component){
        case "section":
            return (
                    <Card className="page-builder-layer-card" key={layer.id}>
                        <Typography variant="h7">
                            Section
                        </Typography>
                        <IconButton onClick={() => setDrawer(true)}>
                            <CiEdit/>
                        </IconButton>
                        <Drawer
                            anchor='right'
                            open={drawer}
                            onClose={() => setDrawer(false)}
                        >
                            <Section 
                                drawer={drawer} 
                                setDrawer={setDrawer} 
                                id={layer.id}
                                setOpenSnackbar={setOpenSnackbar}
                                setMessage={setMessage}
                                setSnackbarType={setSnackbarType}
                            />
                        </Drawer>
                    </Card>
            )
        case "sub-section":
            return (
                <Card className="page-builder-layer-card" key={layer.id}>
                <Typography variant="h7">
                    Sub Section
                </Typography>
                <IconButton onClick={() => setDrawer(true)}>
                    <CiEdit/>
                </IconButton>
                <Drawer
                    anchor='right'
                    open={drawer}
                    onClose={() => setDrawer(false)}
                >
                    <SubSection
                        drawer={drawer} 
                        setDrawer={setDrawer} 
                        id={layer.id}
                        setOpenSnackbar={setOpenSnackbar}
                        setMessage={setMessage}
                        setSnackbarType={setSnackbarType}
                        modal={modal}
                        setModal={setModal}
                    />
                </Drawer>
            </Card>
            )
        case "button":
            return (
                <Card className="page-builder-layer-card" key={layer.id}>
                <Typography variant="h7">
                    Button
                </Typography>
                <IconButton onClick={() => setDrawer(true)}>
                    <CiEdit/>
                </IconButton>
                <Drawer
                    anchor='right'
                    open={drawer}
                    onClose={() => setDrawer(false)}
                >
                    <ButtonLayer drawer={drawer} setdrawer={setDrawer} id={layer.id}/>
                </Drawer>
            </Card>
            )
            case "accordion":
            return (
                <Card className="page-builder-layer-card" key={layer.id}>
                <Typography variant="h7">
                    Accordion
                </Typography>
                <IconButton onClick={() => setDrawer(true)}>
                    <CiEdit/>
                </IconButton>
                <Drawer
                    anchor='right'
                    open={drawer}
                    onClose={() => setDrawer(false)}
                >
                    <ButtonLayer drawer={drawer} setdrawer={setDrawer} id={layer.id}/>
                </Drawer>
            </Card>
            )
}
}