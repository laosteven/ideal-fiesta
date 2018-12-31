import React from "react";
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
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <CardBody>
                  <img className={classes.logo} src={Logo} alt="logo" />
                  <p className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    blandit neque dui, id commodo turpis maximus in. Vivamus
                    maximus ligula a rhoncus pellentesque. Etiam nec ultricies
                    urna. Nullam sit amet magna sed ligula bibendum vehicula.
                  </p>
                </CardBody>
                <CardFooter className={classes.footer}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <CardBody>
                  <h3 className={classes.title}>Training</h3>
                  <p className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    blandit neque dui, id commodo turpis maximus in. Vivamus
                    maximus ligula a rhoncus pellentesque. Etiam nec ultricies
                    urna. Nullam sit amet magna sed ligula bibendum vehicula.
                  </p>
                </CardBody>

                <CardFooter className={classes.footer}>
                  <Tooltip
                    title="Website"
                    placement={"bottom"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                    >
                      <i className={classes.normals + " fa fa-link"} />
                    </Button>
                  </Tooltip>

                  <Tooltip
                    title="Google Maps"
                    placement={"bottom"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      justIcon
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
                  <h3 className={classes.title}>Join Us!</h3>
                  <p className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    blandit neque dui, id commodo turpis maximus in. Vivamus
                    maximus ligula a rhoncus pellentesque. Etiam nec ultricies
                    urna. Nullam sit amet magna sed ligula bibendum vehicula.
                  </p>
                </CardBody>

                <CardFooter className={classes.footerButton}>
                  <Button
                    target="_blank"
                    rel="noopener noreferrer"
                    color="danger"
                    round
                  >
                    JOIN BEAST!
                    <i className={classes.userSpacing + " fa fa-user-plus"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(aboutStyle)(AboutSection);
