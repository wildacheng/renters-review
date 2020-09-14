import React from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { makeStyles, Grid, Button } from "@material-ui/core";

import { Form } from "./utils";
import Footer from "../footer";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    height: "100%",
    margin: "0px",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 1000,
    },
  },
  button: {
    fontFamily: "Barlow Semi Condensed,sans-serif",
    fontWeight: 800,
    letterSpacing: "1px",
    color: "white",
    backgroundColor: "red",
    width:"300px",
    borderRadius: "50px"
  },
}));

const ReviewForm = () => {
  const initialFormData = {
    title: "",
    review: "",
    name: "",
    submitted: false,
  };

  const [formData, setFormData] = React.useState(initialFormData);
  const classes = useStyles();

  const handleChange = (event) => {
    const newForm = { ...formData };
    newForm[event.target.name] = event.target.value;
    setFormData(newForm);
  };

  const handleSubmit = () => {
    const newForm = { ...formData };
    newForm.submitted = true;
    setFormData(newForm);

    setTimeout(() => {
      const newForm = { ...formData };
      newForm.submitted = false;
      setFormData(newForm);
    }, 5000);
  };

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
          <ValidatorForm onSubmit={handleSubmit} className={classes.root}>
            {Form.map((input) => (
              <TextValidator
                label={input.label}
                onChange={handleChange}
                name={input.name}
                value={formData[input.name]}
                validators={input.validators}
                errorMessages={input.errorMessages}
                multiline
                rows={input.rows}
                variant="outlined"
                fullWidth="true"
              />
            ))}

            <Button
              type="submit"
              variant="contained"
              size="large"
              className={classes.button}
              // fullWidth="false"
            >
              Sign Up
            </Button>
          </ValidatorForm>
        </Grid>
      </Grid>
      <Footer />
    </React.Fragment>
  );
};

export default ReviewForm;
