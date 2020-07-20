import React from "react";
import Carousel from "react-material-ui-carousel";
import autoBind from "auto-bind";
import "./style.css";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  //   Button,
} from "@material-ui/core";

function Banner(props) {
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
        <CardMedia className="Media" image={item.Image} title={item.Name}>
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

const items = [
  {
    Name: "Life Stages",
    Caption: "Preparing for life's next adventure!",
    contentPosition: "left",
    Items: [
      {
        Name: "Tips to Find a New Home to Rent",
        Image: "https://image.freepik.com/free-photo/happy-family-with-kids-unpacking-boxes-moving-into-new-home_1163-4830.jpg",
        //https://www.moneycrashers.com/how-to-find-cheap-apartments-for-rent-guide/

      },
      {
        Name: "How to Get Your First Apartment",
        Image:
        "https://i2.wp.com/movingtips.wpengine.com/wp-content/uploads/2019/02/moving-boxes-crosscountry.jpg?fit=1024%2C684&ssl=1",
        //   "https://www.simplyss.com/blog/wp-content/uploads/2017/10/people_moving_boxes-copy.jpg",
          //https://www.thebalance.com/how-to-rent-your-first-apartment-2385952
      },
    ],
  },
  {
    Name: "Cleaning and Maintenance",
    Caption: "Tips to make your home look like new!",
    contentPosition: "middle",
    Items: [
      {
        Name: "Natural & Eco-Friendly Cleaning Products",
        Image: "https://images.squarespace-cdn.com/content/v1/5442b6cce4b0cf00d1a3bef2/1582238610074-X3JRV1ONIHRJ2RDS7Y0P/ke17ZwdGBToddI8pDm48kH-4OmWX1Wg12tJUPpDoMXJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIHV3hW_ZM-5fvNySOcOQoh5RWbjR0EdKck9RetebaNrA/natural-cleaning-products-Mrs-Meyer%27s?format=750w",
        //https://www.thegoodtrade.com/features/natural-eco-friendly-cleaning-products-for-the-conscious-home
      },
      {
        Name: "30 Basic Home Maintenance Tips",
        Image: "https://scottchristopherhomes.com/wp-content/uploads/2017/03/bigstock-Tool-Belt-With-Tools-107244224_web.jpg",
        //https://www.homelight.com/blog/home-maintenance-tips/
      },
    ],
  },
  {
    Name: "Decoratives",
    Caption: "Give style and color to your new home!",
    contentPosition: "right",
    Items: [
      {
        Name: "Discover Your Favorite Decorating Style",
        Image:
          "https://www.thespruce.com/thmb/u_btx5w6fV05MHr0lwAuy0ihS7o=/425x326/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/modern-living-room-1036309800-2eacf87caa1d4201b024d30a806d02b5.jpg",
          //https://www.thespruce.com/discover-your-favorite-decorating-style-1976537
      },
      {
        Name: "How to Decorate Your Home",
        Image:
          "https://static01.nyt.com/images/2018/10/10/realestate/how-to-decorate-guide-slide-DZ35/how-to-decorate-guide-slide-DZ35-jumbo.jpg",
        //https://www.google.com/search?q=how+to+decorate+you+new+home&rlz=1C5CHFA_enUS727US727&oq=how+to+decorate+you+new+home&aqs=chrome..69i57j0l4.5172j0j7&sourceid=chrome&ie=UTF-8
      },
    ],
  },
];

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
        <h2>Featured Blogs</h2>

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
