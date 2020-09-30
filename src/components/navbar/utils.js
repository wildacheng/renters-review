import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  title: {
    flexGrow: 1,
    color: "#32373c",
    textAlign: "left",
    fontSize: "19px",
    fontWeight: "bolder",
    fontFamily: "Montserrat, sans-serif",
    letterSpacing: ".5px",
    cursor: "pointer",
    "&:hover": {
      color: "#83A5CA",
    },
  },
  nav: {
    fontSize: "17px",
    fontFamily: "Montserrat, sans-serif",
    color: "rgba(0, 0, 0, 0.6)",
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
});
