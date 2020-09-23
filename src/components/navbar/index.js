import React from "react";
// import axios from "axios"
import { Link as RouterLink, withRouter } from "react-router-dom";
import MenuDropDown from "../menuDropDown";
import AuthFormModal from "../authFormModal";
import DialogModal from "../dialogModal";
import { GlobalContext } from "../../globalContext";
import {useStyles} from "./utils"

//material.ui
import {
  Box,
  Link,
  AppBar,
  Toolbar,
  Divider,
  Typography,
} from "@material-ui/core";


const Navbar = (props) => {
  const { user } = React.useContext(GlobalContext);
  const { history } = props;
  const [isDesktop, setDesktop] = React.useState(window.innerWidth > 700);
  const [isRegister, setIsRegister] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);

  const classes = useStyles();

  //Navbar -> hamburger menu when window's width is less than 680
  const updateMedia = () => {
    setDesktop(window.innerWidth > 700);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  //onClick for register/sign in modal
  const handleWriteReview = () => {
    history.push("/writeareview");
  };

  const handleDialog = () => {
    setOpenDialog(true);
  };

  const handleRegister = () => {
    setIsRegister(true);
    setOpen(true);
  };

  const handleSignIn = () => {
    setIsRegister(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setOpen(false);
    setIsRegister(false);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {!isDesktop && (
              <MenuDropDown
                handleWriteReview={handleWriteReview}
                handleDialog={handleDialog}
                handleRegister={handleRegister}
                handleSignIn={handleSignIn}
                user={user}
              />
            )}
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
            {isDesktop && (
              <React.Fragment>
                <Box
                  component="span"
                  mx={1}
                  fontSize="h6.fontSize"
                  fontFamily="Times New Roman,serif"
                  className={classes.hover}
                  onClick={user ? handleWriteReview : handleDialog}
                >
                  Write a Review
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
                  fontFamily="Times New Roman,serif"
                  className={classes.hover}
                  onClick={handleRegister}
                >
                  Register
                </Box>
                <Box
                  component="span"
                  mx={1}
                  fontSize="h6.fontSize"
                  fontFamily="Times New Roman,serif"
                  className={classes.hover}
                  onClick={handleSignIn}
                >
                  Sign In
                </Box>
              </React.Fragment>
            )}
          </Toolbar>
        </AppBar>
      </div>
      <DialogModal open={openDialog} onClose={handleClose} />
      <AuthFormModal
        open={open}
        handleClose={handleClose}
        isRegister={isRegister}
      />
    </React.Fragment>
  );
};

export default withRouter(Navbar);
