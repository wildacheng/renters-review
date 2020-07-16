import React from "react";
import "./style.css";

//material.ui
import SearchIcon from "@material-ui/icons/Search";
import {
  makeStyles,
  Typography,
  Box,
  fade,
  IconButton,
  InputBase,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logo: {
    position: "absolute",
    top: "35%",
    color: "#ffffff",
    backgroundColor: fade(theme.palette.common.black, 0.65),
  },
  search: {
    position: "absolute",
    display: "flex",
    zIndex: 1,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 1),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.85),
    },
    width: "50ch",
    top: "45%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: "large"
  },
}));


const HomePage = () => {
  const classes = useStyles();

  return (
    <div>
      <img
        id="image"
        src="https://cdn.home-designing.com/wp-content/uploads/2018/04/Taupe-sofa.jpg"
      />
      <div className="search-container">
        <Typography className={classes.logo} component="div">
          <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
            Real Reviews To Help You Find The Perfect Home
          </Box>
        </Typography>
        <div className={classes.search}>
          <InputBase
            className={classes.input}
            placeholder="Enter an address, neighborhood, city or ZIP code"
            fontFamily="Century Gothic Std"
            // inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
