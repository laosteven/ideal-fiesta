import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

import introductionStyle from "assets/jss/material-kit-react/views/landingPageSections/introductionStyle.jsx";
import United from "assets/img/United.png";

class IntroductionSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={5}>
            <img className={classes.united} src={United} alt="United Beast" />
          </GridItem>
          <GridItem xs={12} sm={12} md={7}>
            <h3>
              <b>WHO ARE WE?</b>
            </h3>
            <p className={classes.justify}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              blandit neque dui, id commodo turpis maximus in. Vivamus maximus
              ligula a rhoncus pellentesque. Etiam nec ultricies urna. Nullam
              sit amet magna sed ligula bibendum vehicula. Mauris eu elit ante.
              Integer elit magna, pharetra in nisl vitae, efficitur efficitur
              dui.
              <br />
              <br />
              Sed ut molestie massa. In eu tortor id ex rutrum mattis. Ut congue
              tincidunt nisi, eget vehicula justo luctus quis. Aenean eleifend
              ipsum vel vulputate elementum. Vestibulum et enim at sapien
              ullamcorper ultricies eget at sapien. Mauris quis fermentum
              ligula. Phasellus ut orci et velit pellentesque consectetur.
            </p>

            <Button
              target="_blank"
              rel="noopener noreferrer"
              color="danger"
              round
            >
              JOIN BEAST!
              <i className={classes.userSpacing + " fa fa-user-plus"} />
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(introductionStyle)(IntroductionSection);
