import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import scriptLoader from "react-async-script-loader";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { IconButton, InputBase } from "@material-ui/core";
import { useStyles, activeStyle } from "./utils";

const SearchBar = (props) => {
  const {
    isScriptLoaded,
    isScriptLoadSucceed,
    address,
    setAddress,
    setCoordinates,
    handleClick,
    placeholder,
  } = props;
  const [disabled, setDisabled] = React.useState(true);

  const classes = useStyles();

  const handleChange = (address) => {
    setAddress(address);
    setDisabled(true);
  };

  const handleSelect = async (address) => {
    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      setAddress(address);
      setCoordinates(latLng);
      setDisabled(false);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const searchOptions = {
    types: ["address"],
  };

  if (isScriptLoaded && isScriptLoadSucceed) {
    return (
      <div className={classes.container}>
        <PlacesAutocomplete
          value={address}
          onChange={handleChange}
          onSelect={handleSelect}
          searchOptions={searchOptions}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
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
                    const style = suggestion.active
                      ? activeStyle("#83A5CA")
                      : activeStyle("#ffffff");

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
            disabled={disabled}
            onClick={handleClick}
            color="inherit"
            type="submit"
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API}&libraries=places`,
])(SearchBar);
