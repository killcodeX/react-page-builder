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

function FlexLayout({
  flexVar,
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
  setModal,
}) {
  return (
    <div className="children-form">
      <div className="form-children-heading text-secondary py-2">
        Flex System
      </div>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="my-2"
      >
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
              <MenuItem value={"flex"}>Flex</MenuItem>
              <MenuItem value={"inline-flex"}>Inline Flex</MenuItem>
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
              <MenuItem value={"wrap"}>Flex Wrap</MenuItem>
              <MenuItem value={"nowrap"}>No Wrap</MenuItem>
            </Select>
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
            <InputLabel id="flex-variation-label">Flex Direction</InputLabel>
            <Select
              labelId="flex-variation-label"
              id="flex-variation-label"
              label="Flex Direction"
              value={flexDir}
              onChange={(e) => setFlexDir(e.target.value)}
            >
              <MenuItem value={"column"}>Column</MenuItem>
              <MenuItem value={"column-reverse"}>Column Reverse</MenuItem>
              <MenuItem value={"row"}>Row</MenuItem>
              <MenuItem value={"row-reverse"}>Row Reverse</MenuItem>
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
              <MenuItem value={"flex-start"}>Content Start</MenuItem>
              <MenuItem value={"flex-end"}>Content End</MenuItem>
              <MenuItem value={"center"}>Content Center</MenuItem>
              <MenuItem value={"space-between"}>Content Between</MenuItem>
              <MenuItem value={"space-around"}>Content Around</MenuItem>
              <MenuItem value={"space-evenly"}>Content Evenly</MenuItem>
            </Select>
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
            <InputLabel id="flex-variation-label">Align Items</InputLabel>
            <Select
              labelId="flex-variation-label"
              id="flex-variation-label"
              label="Align Items"
              value={alignItems}
              onChange={(e) => setAlignItems(e.target.value)}
            >
              <MenuItem value={"flex-start"}>Align Start</MenuItem>
              <MenuItem value={"flex-end"}>Align End</MenuItem>
              <MenuItem value={"center"}>Align Center</MenuItem>
              <MenuItem value={"baseline"}>Align Baseline</MenuItem>
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
        <div className="form-children-heading text-secondary py-2">
          Add Child Component in Sub Section
        </div>
        <Grid item xs={12} md={12} onClick={() => setModal(true)}>
          <div className="add-component-container">
            <AiOutlineAppstoreAdd />
            <span>Add Component to SubSection</span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default FlexLayout;
