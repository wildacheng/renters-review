import React from "react";
import { Grid, Button, Box, TextField, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { useStyles, Form } from "./utils";
import Footer from "../footer";

const ReviewForm = () => {
  const initialFormData = {
    title: {
      value: "",
      error: false,
    },
    review: {
      value: "",
      error: false,
    },
    name: {
      value: "",
      error: false,
    },
  };

  const labels = {
    0.5: "Severly Lacking",
    1: "Severly Lacking",
    1.5: "Has some issues",
    2: "Has some issues",
    2.5: "Not a bad place to live",
    3: "Not a bad place to live",
    3.5: "Highly recommend",
    4: "Highly recommend",
    4.5: "Love this place",
    5: "Love this place",
  };

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

  //
  return (
    <React.Fragment>
      <Grid container className={classes.grid}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className={classes.titleContainer}>
            <Typography variant="h3">Write a Review for</Typography>
            <Typography variant="h3">Fill in location</Typography>
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
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <form onSubmit={handleSubmit} className={classes.root}>
              {Form.map((value) => (
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
                />
              ))}
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
      </Grid>
      <Footer />
    </React.Fragment>
  );
};

export default ReviewForm;
