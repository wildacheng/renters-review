import React from "react";
import {
  Grid,
  Button,
  Box,
  TextField,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { useStyles, initialFormData, labels, form } from "./utils";
import Footer from "../footer";

const ReviewForm = () => {
  const [formData, setformData] = React.useState(initialFormData);
  const [value, setValue] = React.useState(3);
  const [hover, setHover] = React.useState(-1);
  const [connection, setConnection] = React.useState("");
  const classes = useStyles();

  //onClick handlers
  const handleChange = (prop) => (event) => {
    setformData({
      ...formData,
      [prop]: { value: event.target.value, error: false },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let updateFormData = { ...formData };
    Object.entries(formData).forEach(([key, value]) => {
      updateFormData[key].error = !value.value;
    });

    setformData(updateFormData);
  };

  const handleSelect = (event) => {
    setConnection(event.target.value);
  };

  //
  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <div className={classes.titleContainer}>
          <Typography variant="h3">Write a Review for</Typography>
          <Typography variant="h3">location</Typography>
        </div>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className={classes.rating}>
            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              size="large"
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
            />
            {value !== null && (
              <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.formGrid}>
          <form onSubmit={handleSubmit} className={classes.formInput}>
            {form.map((value) => (
              <TextField
                key={value.label}
                label={value.label}
                onChange={handleChange(value.name)}
                name={value.name}
                error={formData[value.name].error}
                helperText={
                  formData[value.name].error ? "This field is required" : ""
                }
                multiline
                rows={value.rows}
                variant="outlined"
                fullWidth={true}
              />
            ))}
            <FormControl className={classes.connectionControl}>
              <InputLabel>How are you connected to this apartment?</InputLabel>
              <Select value={connection} onChange={handleSelect}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Former Resident</MenuItem>
                <MenuItem value={20}>Current Resident</MenuItem>
                <MenuItem value={30}>Nereby Resident</MenuItem>
                <MenuItem value={40}>Work Here</MenuItem>
                <MenuItem value={50}>Visitor</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              size="large"
              className={classes.button}
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default ReviewForm;
