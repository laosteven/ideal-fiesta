import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import CalendarEvent from "components/CalendarEvent/CalendarEvent.jsx";
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
                <h3 className={classes.eventHeader}>Competition days</h3>
                <div className={classes.eventContainer}>
                  <CalendarEvent
                    link="http://www.gwndragonboat.com/default.asp?id=toronto-island"
                    dayStart="15"
                    dayEnd="16"
                    month="jun"
                    title="Toronto Festival"
                    time="09:00 AM"
                    location="9 Queens Quay W, Toronto, ON M5J 2H3"
                    color="#fb4646"
                  />
                  <CalendarEvent
                    link="https://www.missiondragonboat.com/en/event/mtl-challenge/"
                    dayStart="06"
                    dayEnd="07"
                    month="jul"
                    title="Montreal Challenge"
                    time="09:00 AM"
                    location="Parc Jean-Drapeau, Montreal, QC H3C 1A9"
                    color="#00adff"
                  />
                  <CalendarEvent
                    dayStart="01"
                    month="aug"
                    title="TBD"
                    time="TBD"
                    location="TBD"
                    color="#fbaf5d"
                    isDisabled
                  />
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
