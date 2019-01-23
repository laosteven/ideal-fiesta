import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { withNamespaces } from "react-i18next";

// @material-ui/icons
import Schedule from "@material-ui/icons/Schedule";
import Star from "@material-ui/icons/Star";

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
              </GridItem>
            </GridContainer>
            <Card className={classes.card}>
              <GridItem xs={12} sm={12} md={8}>
                <NavPills
                  color="danger"
                  tabs={[
                    {
                      tabButton: t("season.practices.title"),
                      tabIcon: Schedule,
                      tabContent: (
                        <span>
                          <p>{t("season.practices.paragraph.10")}</p>
                          <p>
                            <b>{t("season.practices.paragraph.1")}</b>
                          </p>
                          <ul>
                            <li>{t("season.practices.paragraph.2")}</li>
                            <li>{t("season.practices.paragraph.3")}</li>
                            <li>{t("season.practices.paragraph.4")}</li>
                          </ul>

                          <p>
                            <b>{t("season.practices.paragraph.5")}</b>
                          </p>
                          <ul>
                            <li>
                              <b>{t("season.practices.paragraph.6")}</b>
                            </li>
                            <ul>
                              <li>{t("season.practices.paragraph.7")}</li>
                            </ul>
                            <li>
                              <b>{t("season.practices.paragraph.8")}</b>
                            </li>
                            <ul>
                              <li>{t("season.practices.paragraph.9")}</li>
                            </ul>
                          </ul>
                        </span>
                      )
                    },
                    {
                      tabButton: t("season.competitions.title"),
                      tabIcon: Star,
                      tabContent: (
                        <span>
                          <p>{t("season.competitions.paragraph.1")}</p>

                          <ul>
                            <li>
                              <b>{t("season.competitions.paragraph.2")}</b>
                            </li>
                            <ul>
                              <li>{t("season.competitions.paragraph.3")}</li>
                              <li>{t("season.competitions.paragraph.4")}</li>
                            </ul>
                          </ul>
                          <ul>
                            <li>
                              <b>{t("season.competitions.paragraph.5")}</b>
                            </li>
                            <ul>
                              <li>{t("season.competitions.paragraph.6")}</li>
                              <li>{t("season.competitions.paragraph.7")}</li>
                            </ul>
                          </ul>
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
