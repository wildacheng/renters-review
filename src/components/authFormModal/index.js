import React from "react";
//material.ui
import { makeStyles, Modal, Divider, Button } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

//position of the modal
function getModalStyle() {
  return {
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
    width: "30%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Barlow Semi Condensed,sans-serif",
    fontWeight: 800,
    textTransform: "uppercase",
    fontSize: "1.5rem",
    lineHeight: "3rem",
    margin: 0,
  },
  textField: {
    marginBottom: theme.spacing(3),
  },
  divider: {
    height: 2,
    marginBottom: 30,
  },
  button: {
    fontFamily: "Barlow Semi Condensed,sans-serif",
    fontWeight: 800,
    letterSpacing: "1px",
    backgroundColor: "red",
    color: "white",
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
    // const newForm = { ...formData }
    setFormData(initialFormData);
    handleClose()
  };

  let body;
  if (isRegister) {
    body = (
      <div style={modalStyle} className={classes.paper}>
        <div className={classes.title}>Create Your Account</div>
        <Divider className={classes.divider} orientation="horizontal" />
        <ValidatorForm onSubmit={handleSubmit}>
          <div className={classes.textField}>
            <TextValidator
              label="First Name"
              onChange={handleChange}
              name="firstName"
              value={formData.firstName}
              validators={["required"]}
              errorMessages={["Please enter a first name."]}
              variant="outlined"
              fullWidth="true"
            />
          </div>
          <div className={classes.textField}>
            <TextValidator
              label="Last Name"
              onChange={handleChange}
              name="lastName"
              value={formData.lastName}
              validators={["required"]}
              errorMessages={["Please enter a last name."]}
              variant="outlined"
              fullWidth="true"
            />
          </div>
          <div className={classes.textField}>
            <TextValidator
              label="Email"
              onChange={handleChange}
              name="email"
              value={formData.email}
              validators={["required", "isEmail"]}
              errorMessages={[
                "Please enter a valid email address.",
                "Please enter a valid email address.",
              ]}
              variant="outlined"
              fullWidth="true"
            />
          </div>
          <div className={classes.textField}>
            <TextValidator
              label="Password"
              onChange={handleChange}
              name="password"
              value={formData.password}
              validators={["required"]}
              errorMessages={["Please enter a password."]}
              variant="outlined"
              fullWidth="true"
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            size="large"
            className={classes.button}
            fullWidth="true"
          >
            Sign Up
          </Button>
        </ValidatorForm>
      </div>
    );
  } else {
    body = (
      <div style={modalStyle} className={classes.paper}>
        <div className={classes.title}>Log In To Your Account</div>
        <Divider className={classes.divider} orientation="horizontal" />
        <ValidatorForm onSubmit={handleSubmit}>
          <div className={classes.textField}>
            <TextValidator
              label="Email"
              onChange={handleChange}
              name="email"
              value={formData.email}
              validators={["required", "isEmail"]}
              errorMessages={[
                "Please enter a valid email address.",
                "Please enter a valid email address.",
              ]}
              variant="outlined"
              fullWidth="true"
            />
          </div>
          <div className={classes.textField}>
            <TextValidator
              label="Password"
              onChange={handleChange}
              name="password"
              value={formData.password}
              validators={["required"]}
              errorMessages={["Please enter a password."]}
              variant="outlined"
              fullWidth="true"
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            size="large"
            className={classes.button}
            fullWidth="true"
          >
            Sign Up
          </Button>
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
