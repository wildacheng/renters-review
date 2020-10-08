import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    height: "100%",
    minWidth: "1000px",
    minHeight: "800px",
    position: "sticky",
  },
  formGrid: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  map: {
    display: "flex",
    width: "100%",
    height: "100%",
    left: "30%",
    alignItems: "center",
    position: "absolute",
  },
  form: {
    width: "500px",
    height: "690px",
    zIndex: "1",
    left: "10%",
    position: "absolute",
    paddingTop: "10px",
    border: "1px solid lightgrey",
    borderRadius: "20px",
    backgroundColor: "white",
    boxShadow: "0px 2px 20px rgba(150,150,150,0.2)",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    height: "100px",
    color: "#32373c",
    fontSize: "1.7rem",
    fontFamily: "Montserrat, sans-serif",
    letterSpacing: "1px",
    lineHeight: "1.5",
    paddingRight: "50px",
    paddingLeft: "50px",
  },
  subTitle: {
    fontSize: ".9rem",
    textTransform: "uppercase",
  },
  rating: {
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    color: "rgba(0, 0, 0, 0.54)",
    fontFamily: "Montserrat, sans-serif",
  },
  formInput: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // marginBottom: "40px",
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "50%",
    },
  },
  connectionControl: {
    minWidth: "50%",
    "& .MuiFormLabel-root": {
      fontSize: "1.2rem",
      fontWeight: "500",
    },
  },
  button: {
    color: "white",
    width: "50%",
    marginTop: "30px",
    fontWeight: 800,
    letterSpacing: "1px",
    borderRadius: "3px",
    backgroundColor: "#ff5d4e",
    fontFamily: "Montserrat, sans-serif",
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
  },
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
    multi: false,
    rows: 0,
  },
  {
    label: "Review",
    name: "review",
    multi: true,
    rows: 5,
  },
  {
    label: "Name",
    name: "name",
    multi: false,
    rows: 0,
  },
];

export const menuItems = [
  { value: 10, name: "Current Resident" },
  { value: 20, name: "Former Resident" },
  { value: 30, name: "Nereby Resident" },
  { value: 40, name: "Work Here" },
  { value: 50, name: "Visitor" },
];
