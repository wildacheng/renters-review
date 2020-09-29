import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontSize: "23px",
    fontWeight: "bolder",
    fontFamily: "Times New Roman,serif",
    letterSpacing: ".5px",
    cursor: "pointer",
    "&:hover": {
      color: "#83A5CA",
    },
  },
  hover: {
    fontSize: "1.25rem",
    fontFamily: "Times New Roman,serif",
    cursor: "pointer",
    "&:hover": {
      color: "#83A5CA",
    },
  },
  divider: {
    height: 28,
    width: 2,
    margin: 4,
    backgroundColor: "#A9A9A9",
  },
}));
