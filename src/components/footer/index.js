import React from "react";
import { MemoryRouter as Router } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import "./style.css";
//material.ui
import { Link, Grid, makeStyles } from "@material-ui/core";
//react-fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

//styling for ClassName (icons)
const useStyles = makeStyles((theme) => ({
  hover: {
    "&:hover": {
      color: "#007c91",
    },
  },
  box: {
    display: "flex",
    justifyContent: "center",
  },
  menuContainer: {
    display: "flex",
    paddingLeft: "20%",
    paddingRight: "20%",
  },
}));

const Footer = () => {
  const classes = useStyles();

  const handleIcon = (url) => () => {
    return window.open(url);
  };

  return (
    <Router>
      <Grid container justify="center" id="footer">
        <div id="footer-logo">Renter's Review</div>
        <Grid container className={classes.menuContainer}>
          <Grid item xs={12} sm={12} md={4} className={classes.box}>
            <div className="menu">
              <h3>Our Company</h3>
              <div className="menu-link">
                <Link
                  className="link-hover"
                  color="inherit"
                  underline="none"
                  component={RouterLink}
                  to="/aboutus"
                >
                  About Us
                </Link>
                <Link
                  className="link-hover"
                  color="inherit"
                  underline="none"
                  component={RouterLink}
                  to="/privacypolicy"
                >
                  Privacy Policy
                </Link>
                <Link
                  className="link-hover"
                  color="inherit"
                  underline="none"
                  component={RouterLink}
                  to="/termsofservice"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} className={classes.box}>
            <div className="menu">
              <h3>Advertise With Us</h3>
              <div className="menu-link">
                <Link
                  className="link-hover"
                  color="inherit"
                  underline="none"
                  component={RouterLink}
                  to="/aboutus"
                >
                  Advertise
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} className={classes.box}>
            <div className="menu">
              <h3>Let Us Help</h3>
              <div className="menu-link">
                <Link
                  className="link-hover"
                  color="inherit"
                  underline="none"
                  component={RouterLink}
                  to="/contactus"
                >
                  Contact Us
                </Link>
                <Link
                  className="link-hover"
                  color="inherit"
                  underline="none"
                  component={RouterLink}
                  to="/adminlogin"
                >
                  Admin Login
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
        <div id="social-media">
          <FontAwesomeIcon
            className={classes.hover}
            icon={faGithub}
            cursor="pointer"
            style={{ fontSize: "x-large", paddingRight: "15px" }}
            onClick={handleIcon("https://github.com/wildacheng")}
          />

          <FontAwesomeIcon
            className={classes.hover}
            icon={faLinkedin}
            cursor="pointer"
            style={{ fontSize: "x-large" }}
            onClick={handleIcon("https://www.linkedin.com/in/wilda-cheng/")}
          />
        </div>
      </Grid>
    </Router>
  );
};

export default Footer;
