import React from "react";
import {
  Grid,
  Button,
  Box,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
  Select,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { useStyles, initialFormData, labels, form } from "./utils";
import Footer from "../footer";

const ReviewForm = () => {
  const [formData, setformData] = React.useState(initialFormData);
  const [value, setValue] = React.useState(3);
  const [hover, setHover] = React.useState(-1);
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

  return (
    <Grid container className={classes.grid} justify="center">
      <Grid item xs={8} sm={6} md={6} lg={6}>
        <div className={classes.titleContainer}>Write a review for</div>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={6} sm={12} md={12} lg={12}>
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
      <Grid container justify="center">
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={8}
          xl={6}
          className={classes.formGrid}
        >
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
            <FormControl
              error={formData.connection.error}
              className={classes.connectionControl}
            >
              <InputLabel>I am a...</InputLabel>
              <Select
                value={formData.connection.value}
                onChange={handleChange("connection")}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Current Resident</MenuItem>
                <MenuItem value={20}>Former Resident</MenuItem>
                <MenuItem value={30}>Nereby Resident</MenuItem>
                <MenuItem value={40}>Work Here</MenuItem>
                <MenuItem value={50}>Visitor</MenuItem>
              </Select>
              {formData.connection.error && (
                <FormHelperText>This field is required.</FormHelperText>
              )}
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
