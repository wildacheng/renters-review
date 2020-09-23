import React from "react";
import axios from "axios";
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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useStyles,
  initialFormData,
  registerForm,
  signInForm,
  getModalStyle,
  register,
  signIn,
} from "./utils";
import { GlobalContext } from "../../globalContext";
import "./style.css";

toast.configure();

function AuthFormModal(props) {
  const { open, handleClose, isRegister } = props;
  const { user, setUser } = React.useContext(GlobalContext);
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    let updateFormData = { ...formData };
    Object.entries(formData).forEach(([key, value]) => {
      updateFormData[key].error = !value.value;
    });

    setFormData(updateFormData);

    try {
      const herokuEndPoint = "http://gentle-depths-93598.herokuapp.com/api/";

      if (isRegister) {
        const res = await fetch(`${herokuEndPoint}register`, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(register(formData)),
        });
        const payload = await res.json()
        console.log(payload, 'wAT')
      } else {
        const res = await fetch(`${herokuEndPoint}login`, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signIn(formData)),
        });
        const payload = await res.json()
        console.log(payload, 'wAT')
        setUser(res);
      }
    } catch (error) {
      isRegister
        ? console.log(error, "Unable to register new user")
        : console.log(error, "Unable to retrieve user");
    }
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
          {registerForm.map((value) => inputForm(value))}
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
          {signInForm.map((value) => inputForm(value))}
          {passwordFormControl()}
          {buttonControl()}
        </form>
      </div>
    );
  }

  return (
    <div>
      <ToastContainer />
      <Modal open={open} onClose={resetFormData}>
        {body}
      </Modal>
    </div>
  );
}

export default AuthFormModal;
