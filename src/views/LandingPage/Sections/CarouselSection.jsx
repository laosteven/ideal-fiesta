import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { withNamespaces } from "react-i18next";
// @material-ui/icons
import Info from "@material-ui/icons/Info";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/landingPageSections/carouselStyle.jsx";

import image1 from "assets/img/Carousel/1.jpg";
import image2 from "assets/img/Carousel/2.jpg";
import image3 from "assets/img/Carousel/3.jpg";
import image4 from "assets/img/Carousel/4.jpg";
import image5 from "assets/img/Carousel/5.jpg";
import image6 from "assets/img/Carousel/6.jpg";
import image7 from "assets/img/Carousel/fyujon.jpg";
import image8 from "assets/img/Carousel/raging.jpg";
import image9 from "assets/img/Carousel/titans.jpg";

class CarouselSection extends React.Component {
  render() {
    const { classes, t } = this.props;
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
            <h2 className={classes.title}>{t("carousel.title")}</h2>
            <h5 className={classes.description}>{t("carousel.description")}</h5>
          </GridItem>
        </GridContainer>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image1}
                      alt="slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <Info className={classes.slickIcons + " slick-icons"} />
                        {t("carousel.image.1")}
                      </h4>
                    </div>
                  </div>

                  <div>
                    <img
                      src={image2}
                      alt="slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <Info className={classes.slickIcons + " slick-icons"} />
                        {t("carousel.image.2")}
                      </h4>
                    </div>
                  </div>

                  <div>
                    <img
                      src={image3}
                      alt="slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <Info className={classes.slickIcons + " slick-icons"} />
                        {t("carousel.image.3")}
                      </h4>
                    </div>
                  </div>

                  <div>
                    <img
                      src={image4}
                      alt="slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <Info className={classes.slickIcons + " slick-icons"} />
                        {t("carousel.image.4")}
                      </h4>
                    </div>
                  </div>

                  <div>
                    <img
                      src={image5}
                      alt="slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <Info className={classes.slickIcons + " slick-icons"} />
                        {t("carousel.image.5")}
                      </h4>
                    </div>
                  </div>

                  <div>
                    <img
                      src={image6}
                      alt="slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <Info className={classes.slickIcons + " slick-icons"} />
                        {t("carousel.image.6")}
                      </h4>
                    </div>
                  </div>

                  <div>
                    <img
                      src={image7}
                      alt="slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <Info className={classes.slickIcons + " slick-icons"} />
                        {t("carousel.image.7")}
                      </h4>
                    </div>
                  </div>

                  <div>
                    <img
                      src={image8}
                      alt="slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <Info className={classes.slickIcons + " slick-icons"} />
                        {t("carousel.image.8")}
                      </h4>
                    </div>
                  </div>

                  <div>
                    <img
                      src={image9}
                      alt="slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <Info className={classes.slickIcons + " slick-icons"} />
                        {t("carousel.image.9")}
                      </h4>
                    </div>
                  </div>


                </Carousel>
              </Card>
            </GridItem>

            {/* <GridItem xs={12} sm={12} md={6}>
              <h4 className={classes.cardTitle}>
                {t("carousel.information.title")}
              </h4>
              <p className={classes.description}>
                {t("carousel.information.description")}
              </p>
            </GridItem> */}
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withNamespaces("translation")(
  withStyles(carouselStyle)(CarouselSection)
);
