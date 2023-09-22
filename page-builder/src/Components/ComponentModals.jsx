import react from 'react';
import { useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';
import { VscAdd } from "react-icons/vsc";
import { Box, Modal, Typography, Grid, Card, Divider } from "@mui/material";
import { childComponents } from "../Data/Components";
import { addLayers, addSection, activeSection } from "../Redux/Actions/BuildActions";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

function ComponentModal({open, setOpen}){

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style} className="bg-light">
                <Typography className="p-3" id="modal-modal-title" variant="h6" component="h2">
                List of Components
                </Typography>
                <Divider/>
                <Grid container spacing={2} className="px-3 my-2">
                    {
                        childComponents.map(item => {
                            return(
                                <Grid item xs={4} md={4}key={item.id}>
                                    <Card className="component-container d-flex justify-content-between p-3">
                                        <div className='left-side-component-container d-flex'>
                                            <div className='component-container-icon px-2'>{item.icon}</div>
                                            <div className='component-container-label'>{item.component}</div>
                                        </div>
                                        <div className='right-side-component-container cursor-pointer'>
                                            <VscAdd/>
                                        </div>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </Modal>
    )
}

export default ComponentModal;



