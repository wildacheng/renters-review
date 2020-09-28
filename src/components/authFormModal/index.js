import React from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";
import { GlobalContext } from "../../globalContext";
import "./style.css";
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
import {
  useStyles,
  registerForm,
  signInForm,
  getModalStyle,
  requestRegister,
} from "./utils";

const AuthFormModal = (props) => {
  const { open, openToast, handleClose, handleSwitch, isRegister } = props;
  const defaultState = isRegister
    ? {
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
      }
    : {
        email: {
          value: "",
          error: false,
        },
        password: {
          value: "",
          error: false,
        },
      };
  const { setUser } = React.useContext(GlobalContext);
  const [formData, setFormData] = React.useState(defaultState);
  const [showPassword, setShowPassword] = React.useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();

  //onClick handlers
  const handleChange = (prop) => (event) => {
    setFormData({
      ...formData,
      [prop]: {
        value: event.target.value,
        error: prop === "password" ? event.target.value.length < 8 : false,
      },
    });
  };

  const validateFormData = () => {
    const copyFormData = { ...formData };
    const status = [];
    Object.entries(copyFormData).forEach(([key, value]) => {
      key === "password"
        ? (copyFormData[key].error = value.value.length < 8)
        : (copyFormData[key].error = !value.value);
      status.push(copyFormData[key].error);
    });

    setFormData(copyFormData);
    return status.every((stat) => !stat);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = validateFormData();

    if (isValid) {
      const response = isRegister
        ? await requestRegister(formData, true)
        : await requestRegister(formData, false);

      response.success ? openToast(true) : openToast(false);

      //Store the cookie from the response onto the local storage

      if (!isRegister) {
        setUser(response.data);
      }

      resetFormData();
    }
  };

  //have to manual put in initialFormData. doesn't work elsewise
  const resetFormData = () => {
    handleClose();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const renderPasswordError = () => {
    if (isRegister && formData.password.error) {
      return (
        <FormHelperText id="my-helper-text">
          This field is required and minimum 8 characters.
        </FormHelperText>
      );
    } else if (formData.password.error) {
      return (
        <FormHelperText id="my-helper-text">
          This field is required.
        </FormHelperText>
      );
    }
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
          helperText={
            formData[value.name].error ? "This field is required" : ""
          }
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
      {renderPasswordError()}
    </FormControl>
  );

  const buttonControl = (value) => {
    const buttonName = value === isRegister ? "Register" : "Sign In";

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
        <CloseIcon className={classes.closeIcon} onClick={handleClose} />
        <div className="title">Register</div>
        <Divider className={classes.divider} orientation="horizontal" />
        <form onSubmit={handleSubmit}>
          {registerForm.map((value) => inputForm(value))}
          {passwordFormControl()}
          {buttonControl(isRegister)}
        </form>
        <div className={classes.switchForm}>
          <div className={classes.switchTitle}>Already have an account?</div>
          <div onClick={handleSwitch(!isRegister)} className={classes.switchLink}>
            Sign In
          </div>
        </div>
      </div>
    );
  } else {
    body = (
      <div style={modalStyle} className={classes.paper}>
        <CloseIcon className={classes.closeIcon} onClick={handleClose} />
        <div className="title">Sign In</div>
        <Divider className={classes.divider} orientation="horizontal" />
        <form onSubmit={handleSubmit}>
          {signInForm.map((value) => inputForm(value))}
          {passwordFormControl()}
          {buttonControl()}
        </form>
        <div className={classes.switchForm}>
          <div className={classes.switchTitle}>Don't have an account yet?</div>
          <div onClick={handleSwitch(!isRegister)} className={classes.switchLink}>
            Register
          </div>
        </div>
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
};

export default AuthFormModal;
