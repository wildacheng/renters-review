import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    height: "100%",
    margin: "0px",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "40%",
    },
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  button: {
    fontFamily: "Barlow Semi Condensed,sans-serif",
    fontWeight: 800,
    letterSpacing: "1px",
    color: "white",
    backgroundColor: "red",
    width: "300px",
    borderRadius: "50px",
  },
}));


export const Form = [
  {
    label: "Title",
    name: "title",
  },
  {
    label: "Review",
    name: "review",
    rows: 5
  },
  {
    label: "Name",
    name: "name",
  }
];
