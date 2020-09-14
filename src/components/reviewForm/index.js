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

  const handleChange = (prop) => (event) => {
    setFormData({...formData, [prop]: event.target.value});
  };

  const handleSubmit = () => {
    setFormData({...formData, submitted: true});
    // const newForm = { ...formData };
    // newForm.submitted = true;
    // setFormData(newForm);

    setTimeout(() => {
      setFormData({...formData, submitted: false});
      // const newForm = { ...formData };
      // newForm.submitted = false;
      // setFormData(newForm);
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
            {Form.map((value) => (
              <TextValidator
                label={value.label}
                onChange={handleChange(value.name)}
                name={value.name}
                value={formData[value.name]}
                validators={value.validators}
                errorMessages={value.errorMessages}
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
          </ValidatorForm>
        </Grid>
      </Grid>
      <Footer />
    </React.Fragment>
  );
};

export default ReviewForm;
