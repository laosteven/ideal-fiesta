import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import IntroductionSection from "./Sections/IntroductionSection.jsx";
import TeamsSection from "./Sections/TeamsSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";

import Logo from "assets/img/beast-logo.png";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand={Logo}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "danger"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
          <div className={classNames(classes.container, classes.landing)}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={10}>
                <h1 className={classes.title}>Beast Dragonboat Club</h1>
                <hr className={classes.hsep} />
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  blandit neque dui, id commodo turpis maximus in. Vivamus
                  maximus ligula a rhoncus pellentesque. Etiam nec ultricies
                  urna. Nullam sit amet magna sed ligula bibendum vehicula.
                  Mauris eu elit ante. Integer elit magna, pharetra in nisl
                  vitae, efficitur efficitur dui. Sed ut molestie massa.
                </h5>
                <br />
                <Button
                  className={classes.landingBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  round
                >
                  Learn More
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main)}>
          <div className={classes.container}>
            <IntroductionSection />
          </div>

          <div className={classes.bgTeams}>
            <div className={classes.container}>
              <TeamsSection />
            </div>
          </div>

          <div className={classes.container}>
            <WorkSection />
          </div>

          <div className={classes.bgSeason}>
            <div className={classes.container}>
              <WorkSection />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
