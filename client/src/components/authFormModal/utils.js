import { makeStyles } from "@material-ui/core";
const HEROKU_API_ENDPOINT = "/api/";

/* table of contents

  1. useStyles

  2. registerForm

  3. signInForm

  4. getModalStyle

  5. register

  6. signIn

  7. requestRegister

*/

//makeStyles
export const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: "40px",
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
  closeIcon: {
    position: "absolute",
    top: "10px",
    right: "10px",
    color: "rgba(0, 0, 0, 0.54)",
    cursor: "pointer",
  },
  button: {
    height: "50px",
    width: "300px",
    textTransform: "none",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 500,
    fontSize: "1.125rem",
    lineHeight: 1.5,
    color: "white",
    backgroundColor: "#ff5d4e",
    borderRadius: "3px",
    marginBottom: "16px",
  },
  switchForm: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Montserrat, sans-serif",
    lineHeight: "1.5",
  },
  switchTitle: {
    color: "rgba(0, 0, 0, 0.54)",
    marginRight: "10px",
  },
  switchLink: {
    textDecoration: "underline",
    cursor: "pointer",
    color: "#32373c",
  },
}));

//formData format
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
  // width: "70%",
  top: "50%",
  left: "50%",
  transform: `translate(-50%, -50%)`,
  borderRadius: "5px",
});

//backend API payload with values only
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

export const requestRegister = async (formData, isRegister) => {
  const endpoint = isRegister ? "register" : "signIn";
  const payload = isRegister ? register(formData) : signIn(formData);
  try {
    const res = await fetch(`${HEROKU_API_ENDPOINT}${endpoint}`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch (error) {
    console.log(error, `Unable to ${endpoint}`);
  }
};
