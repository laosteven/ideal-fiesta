import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { withNamespaces } from "react-i18next";
import LazyLoad from "react-lazyload";

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
    const { classes, t, ...rest } = this.props;

    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand={Logo}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 20,
            color: "danger"
          }}
          {...rest}
        />

        <div id="#bdbc" className={classes.bgLanding}>
          <LandingSection />
        </div>

        <div className={classNames(classes.main)}>
          <LazyLoad>
            <div id="#whoarewe" className={classes.container}>
              <IntroductionSection />
            </div>
          </LazyLoad>

          <LazyLoad>
            <div id="#teams" className={classes.bgTeams}>
              <div className={classes.container}>
                <TeamsSection />
              </div>
            </div>
          </LazyLoad>

          <LazyLoad>
            <div id="#whatwedo" className={classes.container}>
              <ObjectiveSection />
            </div>
          </LazyLoad>

          <LazyLoad>
            <div id="#season" className={classes.bgSeason}>
              <div className={classes.container} />
              <SeasonSection />
            </div>
          </LazyLoad>

          <LazyLoad>
            <div id="#pictures" className={classes.grey}>
              <div className={classes.container}>
                <CarouselSection />
              </div>
            </div>
          </LazyLoad>

          <LazyLoad>
            <div id="#aboutus" className={classes.container}>
              <ContactSection />
            </div>
          </LazyLoad>

          <LazyLoad>
            <div className={classes.bgFooter}>
              <div className={classes.container} />
              <AboutSection />
            </div>
          </LazyLoad>
        </div>

        <Footer />

        <Nav
          sections={[
            { label: t("title"), section: "#bdbc" },
            { label: t("introduction.title"), section: "#whoarewe" },
            { label: t("teams.title"), section: "#teams" },
            { label: t("objective.title"), section: "#whatwedo" },
            { label: t("season.title"), section: "#season" },
            { label: t("carousel.title"), section: "#pictures" },
            { label: t("about.title"), section: "#aboutus" }
          ]}
        />
      </div>
    );
  }
}

export default withNamespaces("translation")(
  withStyles(landingPageStyle)(LandingPage)
);
