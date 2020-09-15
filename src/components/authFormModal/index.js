import React from "react";
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
    firstName: {
      value: "",
      error: false,
    },
    lastName: {
      value: "",
      error: false,
    },
    email: {
      value: "",
      error: false,
    },
    password: {
      value: "",
      error: false,
    },
  };

  const [formData, setFormData] = React.useState(initialFormData);
  const [showPassword, setShowPassword] = React.useState(false);

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();

  //onClick handlers
  const handleChange = (prop) => (event) => {
    setFormData({
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

    setFormData(updateFormData);
  };

  const resetFormData = () => {
    setFormData(initialFormData);
    handleClose();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // helper callback functions
  const inputForm = (value) => {
    return (
      <div className={classes.textField} key={value.label}>
        <TextField
          onChange={handleChange(value.name)}
          label={value.label}
          name={value.name}
          error={formData[value.name].error}
          helperText={formData[value.name].error ? "This field is required" : ""}
          variant="outlined"
          fullWidth={true}
        />
      </div>
    );
  };

  const passwordFormControl = () => (
    <FormControl
      error={formData.password.error}
      className={classes.textField}
      variant="outlined"
    >
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        value={formData.password.value}
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
      {formData.password.error && (
        <FormHelperText id="my-helper-text">
          This field is required.
        </FormHelperText>
      )}
    </FormControl>
  );

  const buttonControl = (value) => {
    const buttonName = value === isRegister ? "Sign Up" : "Sign In";

    return (
      <div className={classes.buttonField}>
        <Button
          type="submit"
          variant="contained"
          size="large"
          className={classes.button}
        >
          {buttonName}
        </Button>
      </div>
    );
  };

  // conditional rendering
  let body;
  if (isRegister) {
    body = (
      <div style={modalStyle} className={classes.paper}>
        <div className="title">Create your Account</div>
        <Divider className={classes.divider} orientation="horizontal" />
        <form onSubmit={handleSubmit}>
          {RegisterForm.map((value) => inputForm(value))}
          {passwordFormControl()}
          {buttonControl(isRegister)}
        </form>
      </div>
    );
  } else {
    body = (
      <div style={modalStyle} className={classes.paper}>
        <div className="title">My Account</div>
        <Divider className={classes.divider} orientation="horizontal" />
        <form onSubmit={handleSubmit}>
          {SignInForm.map((value) => inputForm(value))}
          {passwordFormControl()}
          {buttonControl()}
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
