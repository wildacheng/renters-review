import React from "react";
//material.ui
import { IconButton, ListItemText, Divider } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles, StyledMenu, StyledMenuItem } from "./utils";

const MenuDropDown = (props) => {
  const {
    handleNav,
    handleDialog,
    handleRegister,
    handleSignIn,
    handleLogout,
    user,
  } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuOptions = user
    ? [
        {
          title: "Blog",
          action: handleNav("/blog"),
        },
        {
          title: "Write a Review",
          action: user ? handleNav("/writeareview") : handleDialog,
        },
        {
          title: "My Reviews",
          action: handleNav("/myreviews"),
        },
        {
          title: "Logout",
          action: handleLogout,
        },
      ]
    : [
        {
          title: "Write a Review",
          action: user ? handleNav("/writeareview") : handleDialog,
        },
        {
          title: "Blog",
          action: handleNav("/blog"),
        },
        {
          title: "Register",
          action: handleRegister,
        },
        {
          title: "Sign In",
          action: handleSignIn,
        },
      ];

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuOptions.map((option, i) => (
          <div key={i}>
            <StyledMenuItem onClick={option.action}>
              <ListItemText primary={option.title} />
            </StyledMenuItem>
            {i < menuOptions.length - 1 && (
              <Divider className={classes.divider} />
            )}
          </div>
        ))}
      </StyledMenu>
    </React.Fragment>
  );
};

export default MenuDropDown;
