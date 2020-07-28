import React from "react";
import Carousel from "react-material-ui-carousel";
import autoBind from "auto-bind";
import "./style.css";
import { items } from './utils'

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  //   Button,
} from "@material-ui/core";


function Banner(props) {
  const handleClick = (pageUrl) => () => {
    window.open(pageUrl, 'blank')
  };

  if (props.newProp) console.log(props.newProp);
  const contentPosition = props.contentPosition
    ? props.contentPosition
    : "left";
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid item xs={12 / totalItems} key="content">
      <CardContent className="Content">
        <Typography className="Title">{props.item.Name}</Typography>

        <Typography className="Caption">{props.item.Caption}</Typography>

        {/* <Button variant="outlined" className="ViewButton">
          View Now
        </Button> */}
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={12 / totalItems} key={item.Name}>
        <CardMedia className="Media" image={item.Image} title={item.Name} onClick={handleClick(item.URL)}>
          <Typography className="MediaCaption">{item.Name}</Typography>
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }

  if (contentPosition === "left") {
    items.unshift(content);
  } else if (contentPosition === "right") {
    items.push(content);
  } else if (contentPosition === "middle") {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  );
}


class BlogCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: true,
      timer: 500,
      animation: "fade",
      indicators: true,
      timeout: 500,
      navButtonsAlwaysVisible: false,
    };

    autoBind(this);
  }

  render() {
    return (
      <div style={{ padding: "15px", fontFamily: "xBarlow Semi Condensed"}} >
        <Typography variant="h2">Featured Blogs</Typography>

        <Carousel
          className="Example"
          autoPlay={this.state.autoPlay}
          timer={this.state.timer}
          animation={this.state.animation}
          indicators={this.state.indicators}
          timeout={this.state.timeout}
          navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
        >
          {items.map((item, index) => {
            return (
              <Banner
                item={item}
                key={index}
                contentPosition={item.contentPosition}
              />
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default BlogCarousel;
