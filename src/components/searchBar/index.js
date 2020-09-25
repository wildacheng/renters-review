import React from "react";
import { withRouter } from "react-router-dom";

//react google places autocomplete
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

//material.ui
import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { IconButton, InputBase } from "@material-ui/core";
import { useStyles } from "./utils";

const SearchBar = ({ history, placeholder }) => {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });
  const [selected, setSelected] = React.useState(false);

  const classes = useStyles();

  const handleChange = (address) => {
    setSelected(false);
    setAddress(address);
  };

  const handleSelect = async (address) => {
    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      setAddress(address);
      setCoordinates(latLng);
      setSelected(true);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleClick = () => {
    // require the term to be length of at least 5 to pass
    history.push({
      pathname: "/reviews",
      state: {
        lat: coordinates.lat,
        lng: coordinates.lng,
      },
    });
  };

  const searchOptions = {
    types: ["address"],
  };

  return (
    <div className={classes.container}>
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className={classes.search}>
            <InputBase
              className={classes.input}
              onChange={handleChange}
              placeholder={placeholder}
              fontFamily="Century Gothic Std"
              {...getInputProps()}
            />
            <div>
              {loading ? <div>Loading...</div> : null}
              {suggestions
                .filter(
                  (suggestion) => suggestion.types[0] === "street_address"
                )
                .map((suggestion, index) => {
                  console.log(suggestion, "Adress");
                  const style = suggestion.active
                    ? {
                        backgroundColor: "#455a64",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        lineHeight: "2.5",
                        borderBottom: "1px solid grey",
                      }
                    : {
                        backgroundColor: "#ffffff",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        lineHeight: "2.5",
                        borderBottom: "1px solid grey",
                      };

                  return (
                    <div
                      key={index}
                      {...getSuggestionItemProps(suggestion, { style })}
                    >
                      <LocationOnOutlinedIcon />
                      {suggestion.description}
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <div>
        <IconButton
          //since onkeydown/press conflicts with the street view library getInputProps method- change icon color instead
          className={selected ? classes.redButton : classes.blkButton}
          onClick={handleClick}
          type="submit"
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default withRouter(SearchBar);
