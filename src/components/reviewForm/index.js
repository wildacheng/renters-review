import React from "react";
import {
  Grid,
  Button,
  Box,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
  Select,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { useStyles, initialFormData, labels, form, menuItems } from "./utils";
import SearchBar from "../searchBar";
import Footer from "../footer";
import "./style.css";

const ReviewForm = () => {
  const [user, setUser] = React.useState(true);
  const [select, setSelect] = React.useState([
    { isTrue: true, value: "location" },
  ]);
  const [formData, setformData] = React.useState(initialFormData);
  const [value, setValue] = React.useState(3);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  //onClick handlers
  const handleChange = (prop) => (event) => {
    setformData({
      ...formData,
      [prop]: { value: event.target.value, error: false },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let updateFormData = { ...formData };
    Object.entries(formData).forEach(([key, value]) => {
      updateFormData[key].error = !value.value;
    });

    setformData(updateFormData);
  };

  return (
    <Grid container className={classes.grid} justify="center">
      {user && !select.isTrue ? (
        <div className="reviewBackgroundImage">
          <div className="searchContainer">
            <div className={classes.titleContainer}>
              <div>Begin your review</div>
              <div className={classes.subTitle}>
                Search for an address and share your experience
              </div>
            </div>
            <Grid container className={classes.searchGrid}>
              <Grid item xs={7} sm={8} md={12} lg={12}>
                <SearchBar />
              </Grid>
            </Grid>
          </div>
        </div>
      ) : (
        <Grid container className={classes.grid} justify="center">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className={classes.titleContainer}>Write a review for</div>
          </Grid>
          <Grid container justify="center">
            <Grid item xs={6} sm={12} md={12} lg={12}>
              <div className={classes.rating}>
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={1}
                  size="large"
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                />
                {value !== null && (
                  <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
              </div>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid
              item
              xs={12}
              md={12}
              lg={8}
              xl={6}
              className={classes.formGrid}
            >
              <form onSubmit={handleSubmit} className={classes.formInput}>
                {form.map((value) => (
                  <TextField
                    key={value.label}
                    label={value.label}
                    onChange={handleChange(value.name)}
                    name={value.name}
                    error={formData[value.name].error}
                    helperText={
                      formData[value.name].error ? "This field is required" : ""
                    }
                    multiline
                    rows={value.rows}
                    variant="outlined"
                    fullWidth={true}
                  />
                ))}
                <FormControl
                  error={formData.connection.error}
                  className={classes.connectionControl}
                >
                  <InputLabel>I am a...</InputLabel>
                  <Select
                    value={formData.connection.value}
                    onChange={handleChange("connection")}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {menuItems.map((item) => (
                      <MenuItem value={item.value}>{item.name}</MenuItem>
                    ))}
                  </Select>
                  {formData.connection.error && (
                    <FormHelperText>This field is required.</FormHelperText>
                  )}
                </FormControl>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  className={classes.button}
                >
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
        </Grid>
      )}
      <Footer />
    </Grid>
  );
};

export default ReviewForm;
