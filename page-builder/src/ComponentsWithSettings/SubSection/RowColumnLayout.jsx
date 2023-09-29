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
import { AiOutlineAppstoreAdd } from "react-icons/ai";

function RowColumnLayout({
  columns,
  setColumns,
  spacing,
  setSpacing,
  modal,
  setModal,
}) {
  return (
    <div className="children-form">
      <div className="form-children-heading text-secondary py-2">
        Row-Column Layout System
      </div>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="my-2"
      >
        <Grid item xs={6} md={6}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              type="number"
              label="Row"
              value={1}
              disabled
              //onChange={(e) => setSpacing(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} md={6}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              type="number"
              label="Spacing"
              value={spacing}
              onChange={(e) => setSpacing(e.target.value)}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="my-2"
      >
        <Grid item xs={6} md={6}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              type="number"
              label="Columns"
              value={columns}
              onChange={(e) => setColumns(e.target.value)}
            />
          </FormControl>
        </Grid>
      </Grid>
      {/* <Grid container>
        <div className="form-children-heading text-secondary py-2">
          Add Child Component in Sub Section
        </div>
        <Grid item xs={12} md={12} onClick={() => setModal(true)}>
          <div className="add-component-container">
            <AiOutlineAppstoreAdd />
            <span>Add Component to SubSection</span>
          </div>
        </Grid>
      </Grid> */}
    </div>
  );
}

export default RowColumnLayout;
