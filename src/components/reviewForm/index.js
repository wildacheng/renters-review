import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";
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

  const [formData, setformData] = React.useState(initialFormData);
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
        <Grid item xs={6} sm={12} md={12} lg={12}>
          <div className="titleContainer">
            <div>write a review for</div>
            <div>location</div>
          </div>
        </Grid>
        <Grid item xs={6} sm={12} md={12} lg={12}>
          <div>STARS REVIEW</div>
        </Grid>
        <Grid item xs={6} sm={12} md={12} lg={12}>
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
      <Footer />
    </React.Fragment>
  );
};

export default ReviewForm;
