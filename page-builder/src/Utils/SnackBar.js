import React, { useState } from "react";
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import { AiOutlineClose } from "react-icons/ai";
import Box from '@mui/material/Box';


function SnackBar({openSnackbar, message, setOpenSnackbar, type}){

    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => setOpenSnackbar(false)}
          >
            <AiOutlineClose />
          </IconButton>
        </React.Fragment>
      );

      
    return (
    <Box>
      <Snackbar
        className={`snackbar-component-${type}`}
        open={openSnackbar}
        autoHideDuration={1000}
        action={action}
        message={message}
      />
    </Box>
  );
}

export default SnackBar;