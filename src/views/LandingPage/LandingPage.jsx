import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Nav from "components/Nav/Nav.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import LandingSection from "./Sections/LandingSection.jsx";
import IntroductionSection from "./Sections/IntroductionSection.jsx";
import TeamsSection from "./Sections/TeamsSection.jsx";
import ObjectiveSection from "./Sections/ObjectiveSection.jsx";
import SeasonSection from "./Sections/SeasonSection.jsx";
import CarouselSection from "./Sections/CarouselSection.jsx";
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

        <div id="#bdbc" className={classes.bgLanding}>
          <LandingSection />
        </div>

        <div className={classNames(classes.main)}>
          <div id="#whoarewe" className={classes.container}>
            <IntroductionSection />
          </div>

          <div id="#teams" className={classes.bgTeams}>
            <div className={classes.container}>
              <TeamsSection />
            </div>
          </div>

          <div id="#whatwedo" className={classes.container}>
            <ObjectiveSection />
          </div>

          <div id="#season" className={classes.bgSeason}>
            <div className={classes.container} />
            <SeasonSection />
          </div>

          <div id="#pictures" className={classes.grey}>
            <div className={classes.container}>
              <CarouselSection />
            </div>
          </div>

          <div id="#aboutus" className={classes.container}>
            <ContactSection />
          </div>

          <div className={classes.bgFooter}>
            <div className={classes.container} />
            <AboutSection />
          </div>
        </div>

        <Footer />

        <Nav 
          sections={[
            { label: "Beast Dragon Boat Club", section: "#bdbc" },
            { label: "Who are we?", section: "#whoarewe" },
            { label: "Teams", section: "#teams" },
            { label: "What we do?", section: "#whatwedo" },
            { label: "Season", section: "#season" },
            { label: "Pictures", section: "#pictures" },
            { label: "About us", section: "#aboutus" }
          ]}
          />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
