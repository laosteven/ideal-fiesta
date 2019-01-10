import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/icons
import Schedule from "@material-ui/icons/Schedule";
import LocationOn from "@material-ui/icons/LocationOn";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import landingStyle from "assets/jss/material-kit-react/views/landingPageSections/landingStyle.jsx";

class LandingSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={5}>
            <h1 className={classes.title}>Beast Dragon Boat Club</h1>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              blandit neque dui, id commodo turpis maximus in. Vivamus maximus
              ligula a rhoncus pellentesque. Etiam nec ultricies urna. Nullam
              sit amet magna sed ligula bibendum vehicula. Mauris eu elit ante.
              Integer elit magna, pharetra in nisl vitae, efficitur efficitur
              dui. Sed ut molestie massa.
            </h5>
            <br />
            <Button
              color="danger"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              Learn More
            </Button>
          </GridItem>
          <GridItem className={classes.gridCalendar} xs={12} sm={12} md={5}>
            <Card className={classes.card}>
              <CardBody>
                <h3 className={classes.eventHeader}>Calendar</h3>
                <div className={classes.eventContainer}>
                  <a
                    href="http://www.gwndragonboat.com/default.asp?id=toronto-island"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className={classes.eventRow1}>
                      <div className={classes.eventCalStart}>
                        <div className={classes.eventDate}>15</div>
                        <div className={classes.eventMonth}>jun</div>
                      </div>
                      <div className={classes.eventCalEnd}>
                        <div className={classes.eventDateEnd}>-16</div>
                      </div>
                      <div className={classes.eventDetails}>
                        <div className={classes.eventTitle}>
                          Toronto Festival
                        </div>
                        <div className={classes.eventDesc}>
                          <Schedule className={classes.eventIcon} /> 09:00 AM
                          <br />
                          <LocationOn className={classes.eventIcon} /> 9 Queens
                          Quay W, Toronto, ON M5J 2H3
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://www.missiondragonboat.com/en/event/mtl-challenge/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className={classes.eventRow2}>
                      <div className={classes.eventCalStart}>
                        <div className={classes.eventDate}>06</div>
                        <div className={classes.eventMonth}>jul</div>
                      </div>
                      <div className={classes.eventCalEnd}>
                        <div className={classes.eventDateEnd}>-07</div>
                      </div>
                      <div className={classes.eventDetails}>
                        <div className={classes.eventTitle}>MTL Challenge</div>
                        <div className={classes.eventDesc}>
                          <Schedule className={classes.eventIcon} /> 09:00 AM
                          <br />
                          <LocationOn className={classes.eventIcon} /> Parc
                          Jean-Drapeau, Montreal, QC H3C 1A9
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="" rel="noopener noreferrer" target="_blank">
                    <div
                      className={classNames(
                        classes.eventRow3,
                        classes.eventRowCancelled
                      )}
                    >
                      <div className={classes.eventCalStart}>
                        <div className={classes.eventDate}>01</div>
                        <div className={classes.eventMonth}>aug</div>
                      </div>
                      <div className={classes.eventDetails}>
                        <div className={classes.eventTitle}>Title</div>
                        <div className={classes.eventDesc}>
                          <Schedule className={classes.eventIcon} /> Time
                          <br />
                          <LocationOn className={classes.eventIcon} /> Location
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(landingStyle)(LandingSection);