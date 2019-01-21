import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { withNamespaces } from "react-i18next";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import objectiveStyle from "assets/jss/material-kit-react/views/landingPageSections/objectiveStyle.jsx";

import Teams from "assets/img/teams.jpg";
import Building from "assets/img/team-building.jpg";
import Outdoor from "assets/img/outdoor.jpg";

class ObjectiveSection extends React.Component {
  render() {
    const { classes, t } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>{t("objective.title")}</h2>
            <h5 className={classes.description}>
              {t("objective.description")}
            </h5>
          </GridItem>
        </GridContainer>

        <div className={classes.subSection}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <img className={classes.image} src={Teams} alt="1" />
              <div
                className={classNames(classes.imageBlur, classes.imageTeams)}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={7}>
              <h4 className={classes.subTitle}>
                <b>{t("objective.dragonboat.title")}</b>
              </h4>
              <p className={classes.justify}>
                {t("objective.dragonboat.paragraph.1")}
                <br />
                <br />
                {t("objective.dragonboat.paragraph.2")}
              </p>
            </GridItem>
          </GridContainer>
        </div>

        <div className={classes.subSection}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <img className={classes.image} src={Building} alt="1" />
              <div
                className={classNames(classes.imageBlur, classes.imageBuilding)}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={7}>
              <h4 className={classes.subTitle}>
                <b>{t("objective.teambuilding.title")}</b>
              </h4>
              <p className={classes.justify}>
                {t("objective.teambuilding.paragraph.1")}
                <br />
                <br />
                {t("objective.teambuilding.paragraph.2")}
              </p>
            </GridItem>
          </GridContainer>
        </div>

        <div className={classes.subSection}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <img className={classes.image} src={Outdoor} alt="1" />
              <div
                className={classNames(classes.imageBlur, classes.imageOutdoor)}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={7}>
              <h4 className={classes.subTitle}>
                <b>{t("objective.outdoor.title")}</b>
              </h4>
              <p className={classes.justify}>
                {t("objective.outdoor.paragraph.1")}
                <br />
                <br />
                {t("objective.outdoor.paragraph.2")}
              </p>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withNamespaces("translation")(
  withStyles(objectiveStyle)(ObjectiveSection)
);
