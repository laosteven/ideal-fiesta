import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingStyle from "assets/jss/material-kit-react/views/landingPageSections/landingStyle.jsx";

class LandingSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={10}>
              <h1 className={classes.title}>Beast Dragonboat Club</h1>
              <hr className={classes.hsep} />
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                blandit neque dui, id commodo turpis maximus in. Vivamus maximus
                ligula a rhoncus pellentesque. Etiam nec ultricies urna. Nullam
                sit amet magna sed ligula bibendum vehicula. Mauris eu elit
                ante. Integer elit magna, pharetra in nisl vitae, efficitur
                efficitur dui. Sed ut molestie massa.
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
    );
  }
}

export default withStyles(landingStyle)(LandingSection);
