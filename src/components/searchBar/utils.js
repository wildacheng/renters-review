import { makeStyles, fade } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "flex-end",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 1),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.85),
    },
  },
  search: {
    flexDirection: "column",
    display: "flex",
    width: "50ch",
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
    fontSize: "large",
    [theme.breakpoints.down('xs')]: {
      fontSize: "small"
    },
  },
}));

export const activeStyle = (color) => ({
  backgroundColor: color,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  lineHeight: "2.5",
  borderBottom: "1px solid grey",
});
