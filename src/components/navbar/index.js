import React from "react";
// import {connect} from 'react-redux'
import { Link as RouterLink } from "react-router-dom";
import MenuDropDown from "../menuDropDown";
import AuthFormModal from "../authFormModal";

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

//styling for ClassName
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontWeight: "700",
    fontSize: "1.5rem",
    lineHeight: "1.334"
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
    backgroundColor: "#ffffff"
  },
}));
//

const Navbar = () => {
  const classes = useStyles();
  const [ open, setOpen ] = React.useState(false);
  const [ isRegister, setIsRegister ] = React.useState(false);

  //onClick for register/sign in modal
  const handleClick = (action) => () => {
    //
    if (action === "register") {
      setIsRegister(true);
    }

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsRegister(false);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <MenuDropDown />
            <Typography className={classes.title}>
              <Link
                color="inherit"
                component={RouterLink}
                to="/"
                underline="none"
              >
                Renter's Review
              </Link>
            </Typography>
            <Box mx={1}>
              <Link
                color="inherit"
                variant="h6"
                component={RouterLink}
                to="/writeareview"
              >
                Write a Review
              </Link>
            </Box>
            <Box ml={2} mr={2}>
              <Link
                color="inherit"
                variant="h6"
                component={RouterLink}
                to="/blog"
              >
                Blog
              </Link>
            </Box>
            <Divider className={classes.divider} orientation="vertical" />
            <Box
              component="span"
              ml={2}
              mr={2}
              fontSize="h6.fontSize"
              fontFamily="Century Gothic Std"
              className={classes.hover}
              onClick={handleClick("register")}
            >
              Register
            </Box>
            <Box
              component="span"
              mx={1}
              fontSize="h6.fontSize"
              fontFamily="Century Gothic Std"
              className={classes.hover}
              onClick={handleClick()}
            >
              Sign In
            </Box>
          </Toolbar>
        </AppBar>
      </div>
      <AuthFormModal
        open={open}
        handleClose={handleClose}
        isRegister={isRegister}
      />
    </React.Fragment>
  );
};

export default Navbar;
// connect(mapState, mapDispatch)(Navbar)
