import React from "react";
import axios from "axios"

//material.ui
import SearchIcon from "@material-ui/icons/Search";
import {
  makeStyles,
  fade,
  IconButton,
  InputBase,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
    fontSize: "large",
  },
}));

const SearchBar = () => {
  const [ searchData, setSearchData ] = React.useState("");
  const classes = useStyles();

  const handleChange = (event) => {
    setSearchData(event.target.value);
  };


  const handleClick = async() => {
        try {
        const res = await axios.get(`https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${searchData}&key=${process.env.REACT_APP_GOOGLE_STATIC_MAP}`)
        console.log(res, "IM RESPOND")
      } catch(error) {
        console.log(error, "Incorrect Input")
      }

  };

  return (
    <div className={classes.search}>
      <InputBase
        onChange={handleChange}
        className={classes.input}
        placeholder="Enter an address, neighborhood, city or ZIP code"
        fontFamily="Century Gothic Std"
      />
      <IconButton
        onClick={handleClick}
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchBar;
