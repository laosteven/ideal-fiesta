import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { withNamespaces } from "react-i18next";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import team1 from "assets/img/Teams/Raging.png";
import team2 from "assets/img/Teams/Fyujon.png";
import team3 from "assets/img/Teams/Titans.png";

import teamsStyle from "assets/jss/material-kit-react/views/landingPageSections/teamsStyle.jsx";

class TeamsSection extends React.Component {
  render() {
    const { classes, t } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>{t("teams.title")}</h2>
            <h5 className={classes.description}>{t("teams.description")}</h5>
            <hr className={classes.hsep} />
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team2} alt="..." className={classes.teamImages} />
                </GridItem>
                <h4 className={classes.cardTitle}>{t("teams.fyujon.name")}</h4>
                <CardBody>
                  <p className={classes.description}>
                    {t("teams.fyujon.description")}
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team1} alt="..." className={classes.teamImages} />
                </GridItem>
                <h4 className={classes.cardTitle}>{t("teams.raging.name")}</h4>
                <CardBody>
                  <p className={classes.description}>
                    {t("teams.raging.description")}
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team3} alt="..." className={classes.teamImages} />
                </GridItem>
                <h4 className={classes.cardTitle}>{t("teams.titans.name")}</h4>
                <CardBody>
                  <p className={classes.description}>
                    {t("teams.titans.description")}
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withNamespaces("translation")(
  withStyles(teamsStyle)(TeamsSection)
);
