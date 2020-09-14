import React from "react";
//material.ui
import {
  makeStyles,
  Modal,
  Divider,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
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
    width: "100%",
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
    width: "200px",
    borderRadius: "50px",
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
    showPassword: false,
  };

  const [formData, setFormData] = React.useState(initialFormData);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();

  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleSubmit = () => {
    setFormData({ ...formData, submitted: true });

    setTimeout(() => {
      setFormData({ ...formData, submitted: false });
    }, 5000);
  };

  const resetFormData = () => {
    setFormData(initialFormData);
    handleClose();
  };

  const handleClickShowPassword = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let body;
  if (isRegister) {
    body = (
      <div style={modalStyle} className={classes.paper}>
        <div className="title">Create Your Account</div>
        <Divider className={classes.divider} orientation="horizontal" />
        <ValidatorForm onSubmit={handleSubmit}>
          {RegisterForm.map((value) => (
            <div className={classes.textField}>
              <TextValidator
                label={value.label}
                onChange={handleChange(value.name)}
                name={value.name}
                value={formData[value.name]}
                validators={value.validators}
                errorMessages={value.errorMessages}
                variant="outlined"
                fullWidth="true"
              />
            </div>
          ))}
          <FormControl
            error={true}
            className={classes.textField}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={formData.showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {formData.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
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
                onChange={handleChange(value.name)}
                name={value.name}
                value={formData[value.name]}
                validators={value.validators}
                errorMessages={value.errorMessages}
                variant="outlined"
                fullWidth="true"
                type={value.type}
              />
            </div>
          ))}
          <FormControl className={classes.textField} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={formData.showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {formData.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
          <div className={classes.buttonField}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              className={classes.button}
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
