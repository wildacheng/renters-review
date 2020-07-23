import React from "react";
//material.ui
import {
  makeStyles,
  Modal,
  TextField,
  Divider,
  Button,
} from "@material-ui/core";
import "./style.css";

//position of the modal
function getModalStyle() {
  return {
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
    borderRadius: '5px'
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
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const registerInput = ["First Name", "Last Name", "Email", "Password"];
  const signInInput = ["Email Address", "Address"];

  let body;

  if (isRegister) {
    body = (
      <form noValidate autoComplete="off">
        <div style={modalStyle} className={classes.paper}>
          <div className={classes.title}>Create Your Account</div>
          <Divider className={classes.divider} orientation="horizontal" />
          {registerInput.map((input) => {
            return (
              <TextField
                className={classes.textField}
                label={input}
                id="outlined-size-normal"
                variant="outlined"
              />
            );
          })}
          <Button variant="contained" size="large" className={classes.button}>
            Sign Up
          </Button>
        </div>
      </form>
    );
  } else {
    body = (
      <div style={modalStyle} className={classes.paper}>
        <div className={classes.title}>Log In To Your Account</div>
        <Divider className={classes.divider} orientation="horizontal" />
        {signInInput.map((input) => {
          return (
            <TextField
              className={classes.textField}
              label={input}
              id="outlined-size-normal"
              variant="outlined"
            />
          );
        })}
        <Button variant="contained" size="large" className={classes.button}>
          Log In
        </Button>
      </div>
    );
  }

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
}

export default AuthFormModal;
