import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { withNamespaces } from "react-i18next";
import Favorite from "@material-ui/icons/Favorite";
import Grade from "@material-ui/icons/Grade";

// core components
import CalendarEvent from "components/CalendarEvent/CalendarEvent.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";

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
            <CustomTabs
              headerColor="danger"
              tabs={[
                {
                  tabName: t("landing.community"),
                  tabIcon: Favorite,
                  tabContent: (
                    <div>
                      <div className={classes.eventContainer}>
                        <CalendarEvent
                          link="https://www.missiondragonboat.com/en/event/lachine-knock-out/"
                          dayStart="08"
                          dayEnd="09"
                          month={t("calendar.month.jun")}
                          title="Lachine Knockout"
                          location="Lachine Canoe Club, Lachine, QC H8S 2N7"
                          color="#fb4646"
                        />
                        <CalendarEvent
                          link="https://www.missiondragonboat.com/en/event/mtl-challenge/"
                          dayStart="06"
                          dayEnd="07"
                          month={t("calendar.month.jul")}
                          title="Mtl Challenge"
                          location="Parc Jean-Drapeau, Montreal, QC H3C 1A9"
                          color="#00adff"
                        />
                        <CalendarEvent
                          link="https://22dragonsrawdon.org/"
                          dayStart="10"
                          month={t("calendar.month.aug")}
                          title="Rawdon"
                          location="Plage Municipale, Rawdon, QC J0K 1S0"
                          color="#fbaf5d"
                        />
                      </div>
                    </div>
                  )
                },
                {
                  tabName: t("landing.sports"),
                  tabIcon: Grade,
                  tabContent: (
                    <div>
                      <div className={classes.eventContainer}>
                        <CalendarEvent
                          link="https://www.missiondragonboat.com/en/event/lachine-knock-out/"
                          dayStart="08"
                          dayEnd="09"
                          month={t("calendar.month.jun")}
                          title="Lachine Knockout"
                          location="Lachine Canoe Club, Lachine, QC H8S 2N7"
                          color="#fb4646"
                        />
                        <CalendarEvent
                          link="http://www.gwndragonboat.com/torontoisland/"
                          dayStart="15"
                          dayEnd="16"
                          month={t("calendar.month.jun")}
                          title="Toronto"
                          location="Centre Island, Toronto, ON"
                          color="#F0A6CA"
                        />
                        <CalendarEvent
                          link="https://www.missiondragonboat.com/en/event/mtl-challenge/"
                          dayStart="06"
                          dayEnd="07"
                          month={t("calendar.month.jul")}
                          title={t("landing.event.2")}
                          location="Parc Jean-Drapeau, Montreal, QC H3C 1A9"
                          color="#00adff"
                        />
                        <CalendarEvent
                          link="https://reginadragonboat.com/"
                          dayStart="19"
                          dayEnd="21"
                          month={t("calendar.month.jul")}
                          title="Regina"
                          location="2900 Wascana DrRegina, SK S4P 3S7"
                          color="#525174"
                        />
                        <CalendarEvent
                          link="https://22dragonsrawdon.org/"
                          dayStart="10"
                          month={t("calendar.month.aug")}
                          title="Rawdon"
                          location="Plage Municipale, Rawdon, QC J0K 1S0"
                          color="#fbaf5d"
                        />
                        <CalendarEvent
                          link="https://www.missiondragonboat.com/en/event/quebec-cup/"
                          dayStart="14"
                          dayEnd="15"
                          month={t("calendar.month.sep")}
                          title="Quebec Cup"
                          location="Parc Jean-Drapeau, Montreal, QC H3C 1A9"
                          color="#5DD39E"
                        />
                      </div>
                    </div>
                  )
                }
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withNamespaces("translation")(
  withStyles(landingStyle)(LandingSection)
);
