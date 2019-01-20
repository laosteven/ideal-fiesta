import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { withNamespaces } from "react-i18next";

// @material-ui/icons
import InsertInvitation from "@material-ui/icons/InsertInvitation";
import Schedule from "@material-ui/icons/Schedule";
import Healing from "@material-ui/icons/Healing";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import seasonStyle from "assets/jss/material-kit-react/views/landingPageSections/seasonStyle.jsx";

class SeasonSection extends React.Component {
  render() {
    const { classes, t } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title}>{t("season.title")}</h2>
                <h5 className={classes.description}>
                  {t("season.description")}
                </h5>
                <hr className={classes.hsep} />
              </GridItem>
            </GridContainer>
            <Card className={classes.card}>
              <GridItem xs={12} sm={12} md={8}>
                <NavPills
                  color="danger"
                  tabs={[
                    {
                      tabButton: t("season.schedule.title"),
                      tabIcon: InsertInvitation,
                      tabContent: (
                        <span>
                          <p>{t("season.schedule.paragraph.1")}</p>
                          <br />
                          <p>{t("season.schedule.paragraph.2")}</p>
                        </span>
                      )
                    },
                    {
                      tabButton: t("season.practices.title"),
                      tabIcon: Schedule,
                      tabContent: (
                        <span>
                          <p>{t("season.practices.paragraph.1")}</p>
                          <br />
                          <p>{t("season.practices.paragraph.2")}</p>
                        </span>
                      )
                    },
                    {
                      tabButton: t("season.competitions.title"),
                      tabIcon: Healing,
                      tabContent: (
                        <span>
                          <p>{t("season.competitions.paragraph.1")}</p>
                          <br />
                          <p>{t("season.competitions.paragraph.2")}</p>
                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default withNamespaces("translation")(
  withStyles(seasonStyle)(SeasonSection)
);
