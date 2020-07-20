import React from "react";
// import {connect} from 'react-redux'
import { MemoryRouter as Router } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import MenuDropDown from '../menuDropDown'

//material.ui
import {
  Box,
  Link,
  AppBar,
  Toolbar,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";

// import {logout} from '../store'
// import "./style.css";

//styling for ClassName
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  title: {
    flexGrow: 1,
    textAlign: "left",

  },
  hover: {
    "&:hover": {
      "text-decoration": "underline",
      "text-decoration-color": "white",
    },
  },
  divider: {
    height: 28,
    width: 2,
    margin: 4,
  },
}));
//

const Navbar = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <MenuDropDown />
            <Typography className={classes.title}>
              <Link
                color="inherit"
                variant="h5"
                component={RouterLink}
                to="/home"
                underline="none"
              >
                Renter's Review
              </Link>
            </Typography>
            <Box mx={1}>
              <Link
                color="inherit"
                variant="h5"
                component={RouterLink}
                to="/writeareview"
              >
                Write a Review
              </Link>
            </Box>
            <Box ml={1} mr={1.5}>
              <Link
                color="inherit"
                variant="h5"
                component={RouterLink}
                to="/blog"
              >
                Blog
              </Link>
            </Box>
            <Divider className={classes.divider} orientation="vertical" />
            <Box
              component="span"
              ml={1.5}
              mr={1}
              fontSize="h5.fontSize"
              fontFamily="Century Gothic Std"
              className={classes.hover}
            >
              Register
            </Box>
            <Box
              component="span"
              mx={1}
              fontSize="h5.fontSize"
              fontFamily="Century Gothic Std"
              className={classes.hover}
            >
              Sign In
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    </Router>
  );
};

export default Navbar;
// connect(mapState, mapDispatch)(Navbar)
