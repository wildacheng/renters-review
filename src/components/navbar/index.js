import React from "react";
import { Link as RouterLink, withRouter } from "react-router-dom";
import MenuDropDown from "../menuDropDown";
import AuthFormModal from "../authFormModal";
import DialogModal from "../dialogModal";

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

//styling for ClassName
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontSize: "23px",
    fontWeight: "bolder",
    letterSpacing: ".5px"
  },
  hover: {
    cursor: "pointer",
    "&:hover": {
      "text-decoration": "underline",
      "text-decoration-color": "white",
    },
  },
  divider: {
    height: 28,
    width: 2,
    margin: 4,
    backgroundColor: "#A9A9A9",
  },
}));
//

const Navbar = (props) => {
  const {history} = props
  const [user, setUser] = React.useState(true);
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
  const handleClick = (action) => () => {
    if (action === "dialog") {
      setOpenDialog(true);
    } else if (action === "reviewForm") {
        history.push("/writeareview")
    } else if (action === "register") {
      setIsRegister(true);
      setOpen(true);
    } else if (action === "signIn") {
      setIsRegister(false);
      setOpen(true);
    }
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
            {!isDesktop && <MenuDropDown handleSelect={handleClick} user={user}/>}
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
                  onClick={
                    user ? handleClick("reviewForm") : handleClick("dialog")
                  }
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
                  onClick={handleClick("register")}
                >
                  Register
                </Box>
                <Box
                  component="span"
                  mx={1}
                  fontSize="h6.fontSize"
                  fontFamily="Times New Roman,serif"
                  className={classes.hover}
                  onClick={handleClick("signIn")}
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
