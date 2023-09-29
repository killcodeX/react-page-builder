import React, { useState } from "react";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import { AiOutlineClose } from "react-icons/ai";
import Box from "@mui/material/Box";

function SnackBar({ openSnackbar, message, setOpenSnackbar, type }) {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  // const action = (
  //   <React.Fragment>
  //     <IconButton
  //       size="small"
  //       aria-label="close"
  //       color="inherit"
  //       onClick={() => setOpenSnackbar(false)}
  //     >
  //       <AiOutlineClose />
  //     </IconButton>
  //   </React.Fragment>
  // );

  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={6000}
      onClose={() => setOpenSnackbar(false)}
    >
      <Alert
        onClose={() => setOpenSnackbar(false)}
        severity={type}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SnackBar;
