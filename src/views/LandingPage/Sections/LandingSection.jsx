import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { withNamespaces } from "react-i18next";

// core components
import CalendarEvent from "components/CalendarEvent/CalendarEvent.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import { Link } from "react-scroll";
import landingStyle from "assets/jss/material-kit-react/views/landingPageSections/landingStyle.jsx";

class LandingSection extends React.Component {
  render() {
    const { classes, t } = this.props;
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={5}>
            <h1 className={classes.title}>{t("title")}</h1>
            <h4 className={classes.description}>
              {t("landing.description.1")} {t("landing.description.2")}
            </h4>
            <br />
            <Link
              className={classes.link}
              to="#whoarewe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button
                color="danger"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                {t("landing.learn")}
              </Button>
            </Link>
          </GridItem>
          <GridItem className={classes.gridCalendar} xs={12} sm={12} md={5}>
            <Card className={classes.card}>
              <CardBody>
                <h3 className={classes.eventHeader}>{t("landing.calendar")}</h3>
                <div className={classes.eventContainer}>
                  <CalendarEvent
                    link="https://www.missiondragonboat.com/en/event/lachine-knock-out/"
                    dayStart="08"
                    dayEnd="09"
                    month={t("calendar.month.jun")}
                    title={t("landing.event.1")}
                    time="09:00 AM"
                    location="Lachine Canoe Club, Lachine, QC H8S 2N7"
                    color="#fb4646"
                  />
                  <CalendarEvent
                    link="https://www.missiondragonboat.com/en/event/mtl-challenge/"
                    dayStart="06"
                    dayEnd="07"
                    month={t("calendar.month.jul")}
                    title={t("landing.event.2")}
                    time="09:00 AM"
                    location="Parc Jean-Drapeau, Montreal, QC H3C 1A9"
                    color="#00adff"
                  />
                  <CalendarEvent
                    dayStart="?"
                    month={t("calendar.month.aug")}
                    title={t("landing.event.3")}
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

export default withNamespaces("translation")(
  withStyles(landingStyle)(LandingSection)
);
