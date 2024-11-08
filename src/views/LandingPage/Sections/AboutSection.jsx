import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { withNamespaces } from "react-i18next";
import i18n from "i18next";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import aboutStyle from "assets/jss/material-kit-react/views/landingPageSections/aboutStyle.jsx";

import Logo from "assets/img/beast-logo.png";

class AboutSection extends React.Component {
  render() {
    const { classes, t } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <CardBody>
                  <img className={classes.logo} src={Logo} alt="logo" />
                  <p className={classes.description}>
                    {t("about.beast.description")}
                  </p>
                </CardBody>
                <CardFooter
                  className={classNames(classes.footer, classes.logoFooter)}
                >
                  <Tooltip
                    id="instagram-tooltip"
                    title={t("header.instagram")}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      justIcon
                      color="transparent"
                      href="https://www.instagram.com/beast_dragonboatclub"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + " fab fa-instagram"} />
                    </Button>
                  </Tooltip>

                  <Tooltip
                    id="instagram-facebook"
                    title={t("header.facebook")}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      color="transparent"
                      href="https://www.facebook.com/BeastDragonboatClub"
                      target="_blank"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + " fab fa-facebook"} />
                    </Button>
                  </Tooltip>
                </CardFooter>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <CardBody>
                  <h3 className={classes.title}>{t("about.training.title")}</h3>
                  <p className={classes.description}>
                    {t("about.training.description")}
                  </p>
                </CardBody>

                <CardFooter className={classes.footer}>
                  <Tooltip
                    title={t("about.training.tooltip.homepage")}
                    placement={"bottom"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      justIcon
                      target="_blank"
                      href="http://www.parcjeandrapeau.com/en/olympic-basin-montreal/"
                      color="transparent"
                      className={classes.margin5}
                    >
                      <i className={classes.normals + " fa fa-link"} />
                    </Button>
                  </Tooltip>

                  <Tooltip
                    title={t("about.training.tooltip.location")}
                    placement={"bottom"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      justIcon
                      target="_blank"
                      href="https://goo.gl/maps/WBsqcg29hLT2"
                      color="transparent"
                      className={classes.margin5}
                    >
                      <i
                        className={classes.normals + " fa fa-map-marker-alt"}
                      />
                    </Button>
                  </Tooltip>
                </CardFooter>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <CardBody>
                  <h3 className={classes.title}>{t("about.join.title")}</h3>
                  <p className={classes.description}>
                    {t("about.join.description")}
                  </p>
                </CardBody>

                <CardFooter className={classes.footerButton}>
                  {i18n.language === "fr" ? (
                    <Button
                      target="_blank"
                      // href="https://stevenlao.typeform.com/to/twCx5e"
                      href="https://forms.gle/QNzZ1D95T7kkKAXk7"
                      rel="noopener noreferrer"
                      color="danger"
                      round
                    >
                      {t("about.join.button")}
                      <i className={classes.userSpacing + " fa fa-user-plus"} />
                    </Button>
                  ) : (
                    <Button
                      target="_blank"
                      // href="https://stevenlao.typeform.com/to/XnhAe6"
                      href="https://forms.gle/QNzZ1D95T7kkKAXk7"
                      rel="noopener noreferrer"
                      color="danger"
                      round
                    >
                      {t("about.join.button")}
                      <i className={classes.userSpacing + " fa fa-user-plus"} />
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withNamespaces("translation")(
  withStyles(aboutStyle)(AboutSection)
);
