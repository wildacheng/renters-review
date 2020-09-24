import React from "react";
//material.ui
import {
  Menu,
  MenuItem,
  withStyles,
  makeStyles,
  IconButton,
  ListItemText,
  Divider,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

//styling for ClassName
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  divider: {
    width: "100%",
    orientation: "horizontal",
  },
}));
//

//menu drop down
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.black,
      },
    },
    width: "-webkit-fill-available",
  },
}))(MenuItem);
//

//component
const MenuDropDown = (props) => {
  const {
    handleWriteReview,
    handleBlog,
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
          title: "Write a Review",
          action: user ? handleWriteReview : handleDialog,
        },
        {
          title: "Blog",
          action: handleBlog,
        },
        { title: "Logout", action: handleLogout },
      ]
    : [
        {
          title: "Write a Review",
          action: user ? handleWriteReview : handleDialog,
        },
        {
          title: "Blog",
          action: handleBlog,
        },
        { title: "Register", action: handleRegister },
        { title: "Sign In", action: handleSignIn },
      ];

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        className={classes.menuButton}
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
