import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    height: "100%",
    margin: "0px",
  },
  searchGrid: {
    width: "auto",
    justifyContent: "center",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "150px",
    fontWeight: "600",
    fontSize: "xx-large",
    fontFamily: "Century Gothic Std"
  },
  subTitle: {
    fontSize: "large",
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
    marginBottom: "50px",
  },
  connectionControl: {
    minWidth: "150px",
    "& .MuiFormLabel-root": {
      fontSize: "1.2rem",
      fontWeight: "500",
    },
  },
  button: {
    color: "white",
    width: "200px",
    marginTop: "30px",
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
  1: "I would not recommend living here.",
  2: "There are better places to live.",
  3: "Not a bad place to live.",
  4: "This is a great place to live!",
  5: "Excellent, highly recommended!",
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

export const menuItems = [
  {value: 10, name: "Current Resident"},
  {value: 20, name: "Former Resident"},
  {value: 30, name: "Nereby Resident"},
  {value: 40, name: "Work Here"},
  {value: 50, name: "Visitor"}
]
