import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    height: "100%",
    margin: "0px",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "200px",
  },
  rating: {
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontFamily: "Century Gothic Std",
  },
  formInput: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "50%",
    },
    "& .MuiFormLabel-root": {
      fontSize: "1.1rem",
      fontWeight: "550",
    },
  },
  formGrid: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  connectionControl: {
    minWidth: 350,
    "& .MuiFormLabel-root": {
      fontSize: "1.2rem",
      fontWeight: "500",
    },
  },
  button: {
    color: "white",
    width: "200px",
    marginTop: "20px",
    fontWeight: 800,
    letterSpacing: "1px",
    borderRadius: "50px",
    backgroundColor: "red",
    fontFamily: "Barlow Semi Condensed,sans-serif",
  },
}));

export const initialFormData = {
  title: {
    value: "",
    error: false,
  },
  review: {
    value: "",
    error: false,
  },
  name: {
    value: "",
    error: false,
  },
  connection: {
    value: "",
    error: false,
  }
};

export const labels = {
  0.5: "Severly Lacking",
  1: "Severly Lacking",
  1.5: "Has some issues",
  2: "Has some issues",
  2.5: "Not a bad place to live",
  3: "Not a bad place to live",
  3.5: "Highly recommend",
  4: "Highly recommend",
  4.5: "Love this place",
  5: "Love this place",
};

export const form = [
  {
    label: "Title",
    name: "title",
  },
  {
    label: "Review",
    name: "review",
    rows: 5,
  },
  {
    label: "Name",
    name: "name",
  },
];
