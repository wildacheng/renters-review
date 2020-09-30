import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: "100%",
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
