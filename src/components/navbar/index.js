import React from "react";
// import {connect} from 'react-redux'
import { MemoryRouter as Router } from "react-router";
import { Link as RouterLink } from "react-router-dom";

//material.ui
import {
  Box,
  Link,
  Menu,
  AppBar,
  Toolbar,
  Divider,
  MenuItem,
  withStyles,
  makeStyles,
  Typography,
  IconButton,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

// import {logout} from '../store'
// import theme from "../../themeUtils"
// import "./style.css";

//styling for ClassName
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
//

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
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
              <StyledMenuItem>
                <ListItemText primary="Apartments for Rent" />
              </StyledMenuItem>
              <Divider />
              <StyledMenuItem>
                <ListItemText primary="Houses for Rent" />
              </StyledMenuItem>
              <Divider />
              <StyledMenuItem>
                <ListItemText primary="Write a Review" />
              </StyledMenuItem>
              <Divider />
              <StyledMenuItem>
                <ListItemText primary="Blog" />
              </StyledMenuItem>
            </StyledMenu>
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
