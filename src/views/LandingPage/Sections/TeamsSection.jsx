import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import team1 from "assets/img/Teams/Raging.png";
import team2 from "assets/img/Teams/Fyujon.png";
import team3 from "assets/img/Teams/Titans.png";

import teamsStyle from "assets/jss/material-kit-react/views/landingPageSections/teamsStyle.jsx";

class TeamsSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Teams</h2>
            <h5 className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h5>
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
                <h4 className={classes.cardTitle}>FYUJON</h4>
                <CardBody>
                  <p className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    blandit neque dui, id commodo turpis maximus in. Vivamus
                    maximus ligula a rhoncus pellentesque.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
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
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team1} alt="..." className={classes.teamImages} />
                </GridItem>
                <h4 className={classes.cardTitle}>RAGING</h4>
                <CardBody>
                  <p className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    blandit neque dui, id commodo turpis maximus in. Vivamus
                    maximus ligula a rhoncus pellentesque.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
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
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team3} alt="..." className={classes.teamImages} />
                </GridItem>
                <h4 className={classes.cardTitle}>TITANS</h4>
                <CardBody>
                  <p className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    blandit neque dui, id commodo turpis maximus in. Vivamus
                    maximus ligula a rhoncus pellentesque.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
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
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamsStyle)(TeamsSection);
