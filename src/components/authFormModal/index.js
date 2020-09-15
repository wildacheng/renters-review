import React from "react";
//material.ui
import {
  Modal,
  Divider,
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
  TextField,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
// import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

//utils
import { useStyles, RegisterForm, SignInForm } from "./utils";
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

function AuthFormModal(props) {
  const { open, handleClose, isRegister } = props;

  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const initialErrorState = {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  };

  const [formData, setFormData] = React.useState(initialFormData);
  const [errorState, setErrorState] = React.useState(initialErrorState);
  const [showPassword, setShowPassword] = React.useState(false);

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();

  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
    setErrorState({...errorState, [prop]: false})
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let updateErrorState = {};
    Object.entries(formData).forEach(([key, value]) => {
      updateErrorState[key] = !value;
    });

    setErrorState(updateErrorState);
  };

  const resetFormData = () => {
    setFormData(initialFormData);
    setErrorState(initialErrorState)
    handleClose();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
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
        <form onSubmit={handleSubmit}>
          {RegisterForm.map((value) => (
            <div className={classes.textField} key={value.label}>
              <TextField
                onChange={handleChange(value.name)}
                label={value.label}
                name={value.name}
                error={errorState[value.name]}
                helperText={errorState[value.name] ? "This field is required" : ""}
                variant="outlined"
                fullWidth={true}
              />
            </div>
          ))}
          <FormControl
            error={errorState.password}
            className={classes.textField}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
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
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
            {errorState.password && (
              <FormHelperText id="my-helper-text">
                This field is required.
              </FormHelperText>
            )}
          </FormControl>
          <div className={classes.buttonField}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              className={classes.button}
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    );
  } else {
    body = (
      <div style={modalStyle} className={classes.paper}>
        <div className="title">Log In To Your Account</div>
        <Divider className={classes.divider} orientation="horizontal" />
        <form onSubmit={handleSubmit}>
          {SignInForm.map((value) => (
            <div className={classes.textField} key={value.label}>
              <TextField
                onChange={handleChange(value.name)}
                name={value.name}
                label={value.label}
                error={errorState[value.name]}
                helperText={errorState[value.name] ? "This field is required" : ""}
                variant="outlined"
                fullWidth="true"
              />
            </div>
          ))}
          <FormControl
            error={errorState.password}
            className={classes.textField}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
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
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
            {errorState.password && (
              <FormHelperText id="my-helper-text">
                This field is required.
              </FormHelperText>
            )}
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
        </form>
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
