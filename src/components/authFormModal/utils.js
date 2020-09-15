import { makeStyles } from "@material-ui/core";

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

export const RegisterForm = [
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

export const SignInForm = [
  {
    label: "Email",
    name: "email",
  },
];
