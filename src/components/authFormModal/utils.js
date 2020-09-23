import { makeStyles } from "@material-ui/core";

/* table of contents

  1. useStyles

  2. initialFormData

  3. registerForm

  4. signInForm

  5. getModalStyle

  6. register

  7. signIn

*/

//makeStyles
export const useStyles = makeStyles((theme) => ({
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

//formData format

export const initialFormData = {
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

export const registerForm = [
  {
    label: "First Name",
    name: "firstName",
  },
  {
    label: "Last Name",
    name: "lastName",
  },
  {
    label: "Email",
    name: "email",
  },
];

export const signInForm = [
  {
    label: "Email",
    name: "email",
  },
];

//position of the modal
export const getModalStyle = () => ({
  color: "#000000",
  top: "50%",
  left: "50%",
  transform: `translate(-50%, -50%)`,
  borderRadius: "5px",
});


//backend API payload
export const register = (formData) => ({
  firstName: formData.firstName.value,
  lastName: formData.lastName.value,
  email: formData.email.value,
  password: formData.password.value,
});

export const signIn = (formData) => ({
  email: formData.email.value,
  password: formData.password.value,
});
