import { makeStyles } from "@material-ui/core";
const HEROKU_API_ENDPOINT = "https://gentle-depths-93598.herokuapp.com/api/";

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
  const endpoint = isRegister ? "register" : "login";
  const payload = isRegister ? register(formData) : signIn(formData);
  try {
    const res = await fetch(`${HEROKU_API_ENDPOINT}${endpoint}`, {
      method: "POST",
      mode: "cors",
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
