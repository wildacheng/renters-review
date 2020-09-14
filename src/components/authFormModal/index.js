import React from "react";
//material.ui
import { makeStyles, Modal, Divider, Button } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
//utils
import { RegisterForm, SignInForm } from "./utils";
import "./style.css";

//position of the modal
function getModalStyle() {
  return {
    color: "#000000",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
    borderRadius: "5px",
  };
}
//

//styling for ClassName
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 3, 2),
    outline: 0,
  },
  textField: {
    marginBottom: theme.spacing(3),
  },
  divider: {
    height: 2,
    marginBottom: 30,
  },
  buttonField: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    fontFamily: "Barlow Semi Condensed,sans-serif",
    fontWeight: 800,
    letterSpacing: "1px",
    color: "white",
    backgroundColor: "red",
    width:"200px",
    borderRadius: "50px"
  },
}));
//

function AuthFormModal(props) {
  const { open, handleClose, isRegister } = props;
  //react hooks to set state
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    submitted: false,
  };

  const [formData, setFormData] = React.useState(initialFormData);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
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

  const resetFormData = () => {
    setFormData(initialFormData);
    handleClose();
  };

  let body;
  if (isRegister) {
    body = (
      <div style={modalStyle} className={classes.paper}>
        <div className="title">Create Your Account</div>
        <Divider className={classes.divider} orientation="horizontal" />
        <ValidatorForm onSubmit={handleSubmit}>
          {RegisterForm.map((input) => (
            <div className={classes.textField}>
              <TextValidator
                label={input.label}
                onChange={handleChange}
                name={input.name}
                value={formData[input.name]}
                validators={input.validators}
                errorMessages={input.errorMessages}
                variant="outlined"
                fullWidth="true"
              />
            </div>
          ))}
          <div className={classes.buttonField}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            className={classes.button}
            fullWidth="true"
          >
            Sign Up
          </Button>
          </div>
        </ValidatorForm>
      </div>
    );
  } else {
    body = (
      <div style={modalStyle} className={classes.paper}>
        <div className="title">Log In To Your Account</div>
        <Divider className={classes.divider} orientation="horizontal" />
        <ValidatorForm onSubmit={handleSubmit}>
          {SignInForm.map((value) => (
            <div className={classes.textField}>
              <TextValidator
                label={value.label}
                onChange={handleChange}
                name={value.name}
                value={formData[value.name]}
                validators={value.validators}
                errorMessages={value.errorMessages}
                variant="outlined"
                fullWidth="true"
              />
            </div>
          ))}
          <div className={classes.buttonField}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            className={classes.button}
            fullWidth="true"
          >
            Sign In
          </Button>
          </div>
        </ValidatorForm>
      </div>
    );
  }

  return (
    <div>
      <Modal open={open} onClose={resetFormData}>
        {body}
      </Modal>
    </div>
  );
}

export default AuthFormModal;
