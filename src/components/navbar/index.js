import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withRouter } from "react-router-dom";
import MenuDropDown from "../menuDropDown";
import AuthFormModal from "../authFormModal";
import DialogModal from "../dialogModal";
import { GlobalContext } from "../../globalContext";
import { useStyles } from "./utils";

//material.ui
import { Box, AppBar, Toolbar, Divider, Typography } from "@material-ui/core";

toast.configure();

const Navbar = (props) => {
  const { history } = props;
  const { user, setUser } = React.useContext(GlobalContext);
  const [isRegister, setIsRegister] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [isDesktop, setDesktop] = React.useState(window.innerWidth > 700);

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
  const handleNav = (nav) => () => {
    history.push(nav);
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

  const handleLogout = () => {
    setUser("");
  };

  const handleToast = (status) => {
    if (status && isRegister) {
      toast("Success! Check email to activate your account.", {
        type: "info",
      });
    } else if (!status && isRegister) {
      toast(`There's an account already with this email.`, {
        type: "error",
      });
    } else if (status && !isRegister) {
      toast(`Welcome back!`, { type: "info" });
    } else if (!status && !isRegister) {
      toast("Email or password is invalid.", { type: "error" });
    }
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {!isDesktop && (
              <MenuDropDown
                handleNav={handleNav}
                handleDialog={handleDialog}
                handleRegister={handleRegister}
                handleSignIn={handleSignIn}
                handleLogout={handleLogout}
                user={user}
              />
            )}
            <Typography className={classes.title}>
              <Box mx={0} onClick={handleNav("/")}>
                Renter's Review
              </Box>
            </Typography>
            {isDesktop && (
              <React.Fragment>
                <Box
                  mx={1}
                  className={classes.hover}
                  onClick={user ? handleNav("/writeareview") : handleDialog}
                >
                  Write a Review
                </Box>
                <Box
                  mx={2}
                  className={classes.hover}
                  onClick={handleNav("/blog")}
                >
                  Blog
                </Box>
                <Divider className={classes.divider} orientation="vertical" />
                {user ? (
                  <React.Fragment>
                    <Box
                      mx={2}
                      className={classes.hover}
                      onClick={handleNav("/myreviews")}
                    >
                      My Reviews
                    </Box>
                    <Box
                      mx={1}
                      className={classes.hover}
                      onClick={handleLogout}
                    >
                      Logout
                    </Box>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Box
                      mx={2}
                      className={classes.hover}
                      onClick={handleRegister}
                    >
                      Register
                    </Box>
                    <Box
                      mx={1}
                      className={classes.hover}
                      onClick={handleSignIn}
                    >
                      Sign In
                    </Box>
                  </React.Fragment>
                )}
              </React.Fragment>
            )}
          </Toolbar>
        </AppBar>
      </div>
      <DialogModal open={openDialog} onClose={handleClose} />
      {open && (
        <AuthFormModal
          open={open}
          openToast={handleToast}
          handleClose={handleClose}
          isRegister={isRegister}
        />
      )}
    </React.Fragment>
  );
};

export default withRouter(Navbar);
