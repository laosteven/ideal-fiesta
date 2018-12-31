import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import LandingSection from "./Sections/LandingSection.jsx";
import IntroductionSection from "./Sections/IntroductionSection.jsx";
import TeamsSection from "./Sections/TeamsSection.jsx";
import ObjectiveSection from "./Sections/ObjectiveSection.jsx";
import SeasonSection from "./Sections/SeasonSection.jsx";
import ContactSection from "./Sections/ContactSection.jsx";
import AboutSection from "./Sections/AboutSection.jsx";

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

        <LandingSection />

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
            <ObjectiveSection />
          </div>

          <div className={classes.bgSeason}>
            <div className={classes.container} />
            <SeasonSection />
          </div>

          <div className={classes.container}>
            <ContactSection />
          </div>

          <div className={classes.bgFooter}>
            <div className={classes.container} />
            <AboutSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
