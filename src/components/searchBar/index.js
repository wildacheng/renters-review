import React from "react";
import {withRouter} from "react-router-dom"
// import axios from "axios";

//react google places autocomplete
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

//material.ui
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, fade, IconButton, InputBase } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    display: "flex",
    justifyContent: "flex-end",
    // zIndex: 1,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 1),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.85),
    },
    width: "50ch",
    top: "45%",
  },
  search: {
    flexDirection: "column",
    display: "flex",
    width: "50ch",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: "large",
  },
}));

const SearchBar = ({ history }) => {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });
  const classes = useStyles();

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = async (address) => {
    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      setCoordinates(latLng);
      setAddress(address);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      history.push("/reviews");
      event.preventDefault();
    }
  };

  return (
    <div className={classes.container}>
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className={classes.search}>
            <InputBase
              className={classes.input}
              onChange={handleChange}
              onKeyDown={handleEnter}
              {...getInputProps()}
              placeholder="Enter an address, neighborhood, city or ZIP code"
              fontFamily="Century Gothic Std"
            />
            <div>
              {loading ? <div>Loading...</div> : null}
              {suggestions.map((suggestion) => {
                const style = suggestion.active
                  ? { backgroundColor: "#455a64", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <IconButton
        // onClick={handleClick}
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default withRouter(SearchBar);
