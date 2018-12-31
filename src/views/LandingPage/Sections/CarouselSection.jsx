import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/landingPageSections/carouselStyle.jsx";

import image2 from "assets/img/footer.jpg";
import image3 from "assets/img/teams.jpg";

class CarouselSection extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Pictures</h2>
            <h5 className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h5>
            <hr className={classes.hsep} />
          </GridItem>
        </GridContainer>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image2}
                      alt="Second slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Somewhere Beyond, United States
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image3}
                      alt="Third slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={6}>
              <h4 className={classes.cardTitle}>Lorem Ipsum</h4>
              <p className={classes.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                sed nisi dui. Integer finibus efficitur sapien vitae lobortis.
                Curabitur hendrerit sapien vel ipsum convallis, in tempor sem
                porttitor. Aenean ornare lobortis magna, ut blandit nulla congue
                a. Sed hendrerit, purus a consequat cursus, tellus dui euismod
                neque, eget sagittis diam elit in nisi.
              </p>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(CarouselSection);
