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
    color: "#32373c",
    fontWeight: "600",
    fontSize: "xx-large",
    fontFamily: "Montserrat, sans-serif",
    lineHeight: "1.5",
  },
  subTitle: {
    fontSize: "large",
  },
}));
