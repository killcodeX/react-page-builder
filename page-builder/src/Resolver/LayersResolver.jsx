import react,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Card, Typography, IconButton, Drawer } from '@mui/material';
import { CiEdit } from "react-icons/ci"
import { Section, SubSection, ButtonLayer } from "../ComponentsWithSettings";
import { activeSection } from "../Redux/Actions/BuildActions";

function LayersResolver({layer}){
    const dispatch = useDispatch()
    const [drawer, setDrawer] = useState(false)
    const activeId = useSelector(state => state.build.activeSection);
    return (
        <div className='layer-resolver-elements my-2'>
                {resolver(layer, drawer, setDrawer)}
            {
                layer?.layer?.length > 0 && layer.layer.map(item =>{
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
        </div>
    )
}

export default LayersResolver;

function resolver(layer, drawer, setDrawer){
    switch(layer.component){
        case "section":
            return (
                    <Card className="page-builder-layer-card">
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
                            <Section id={layer.id}/>
                        </Drawer>
                    </Card>
            )
        case "sub-section":
            return (
                <Card className="page-builder-layer-card">
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
                    <SubSection id={layer.id}/>
                </Drawer>
            </Card>
            )
        case "button":
            return (
                <Card className="page-builder-layer-card">
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
                    <ButtonLayer id={layer.id}/>
                </Drawer>
            </Card>
            )
}
}