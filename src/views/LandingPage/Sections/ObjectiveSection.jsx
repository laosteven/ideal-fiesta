import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import objectiveStyle from "assets/jss/material-kit-react/views/landingPageSections/objectiveStyle.jsx";

import Teams from "assets/img/teams.jpg";
import Building from "assets/img/team-building.jpg";
import Outdoor from "assets/img/outdoor.jpg";

class ObjectiveSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>What we do?</h2>
            <h5 className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h5>
            <hr className={classes.hsep} />
          </GridItem>
        </GridContainer>

        <div className={classes.subSection}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <img className={classes.image} src={Teams} alt="1" />
              <div
                className={classNames(classes.imageBlur, classes.imageTeams)}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={7}>
              <h4 className={classes.subTitle}>
                <b>Lorem Ipsum</b>
              </h4>
              <p className={classes.justify}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                blandit neque dui, id commodo turpis maximus in. Vivamus maximus
                ligula a rhoncus pellentesque. Etiam nec ultricies urna. Nullam
                sit amet magna sed ligula bibendum vehicula. Mauris eu elit
                ante. Integer elit magna, pharetra in nisl vitae, efficitur
                efficitur dui.
                <br />
                <br />
                Sed ut molestie massa. In eu tortor id ex rutrum mattis. Ut
                congue tincidunt nisi, eget vehicula justo luctus quis. Aenean
                eleifend ipsum vel vulputate elementum. Vestibulum et enim at
                sapien ullamcorper ultricies eget at sapien. Mauris quis
                fermentum ligula. Phasellus ut orci et velit pellentesque
                consectetur.
              </p>
            </GridItem>
          </GridContainer>
        </div>

        <div className={classes.subSection}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <img className={classes.image} src={Building} alt="1" />
              <div
                className={classNames(classes.imageBlur, classes.imageBuilding)}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={7}>
              <h4 className={classes.subTitle}>
                <b>Lorem Ipsum</b>
              </h4>
              <p className={classes.justify}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                blandit neque dui, id commodo turpis maximus in. Vivamus maximus
                ligula a rhoncus pellentesque. Etiam nec ultricies urna. Nullam
                sit amet magna sed ligula bibendum vehicula. Mauris eu elit
                ante. Integer elit magna, pharetra in nisl vitae, efficitur
                efficitur dui.
                <br />
                <br />
                Sed ut molestie massa. In eu tortor id ex rutrum mattis. Ut
                congue tincidunt nisi, eget vehicula justo luctus quis. Aenean
                eleifend ipsum vel vulputate elementum. Vestibulum et enim at
                sapien ullamcorper ultricies eget at sapien. Mauris quis
                fermentum ligula. Phasellus ut orci et velit pellentesque
                consectetur.
              </p>
            </GridItem>
          </GridContainer>
        </div>

        <div className={classes.subSection}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <img className={classes.image} src={Outdoor} alt="1" />
              <div
                className={classNames(classes.imageBlur, classes.imageOutdoor)}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={7}>
              <h4 className={classes.subTitle}>
                <b>Lorem Ipsum</b>
              </h4>
              <p className={classes.justify}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                blandit neque dui, id commodo turpis maximus in. Vivamus maximus
                ligula a rhoncus pellentesque. Etiam nec ultricies urna. Nullam
                sit amet magna sed ligula bibendum vehicula. Mauris eu elit
                ante. Integer elit magna, pharetra in nisl vitae, efficitur
                efficitur dui.
                <br />
                <br />
                Sed ut molestie massa. In eu tortor id ex rutrum mattis. Ut
                congue tincidunt nisi, eget vehicula justo luctus quis. Aenean
                eleifend ipsum vel vulputate elementum. Vestibulum et enim at
                sapien ullamcorper ultricies eget at sapien. Mauris quis
                fermentum ligula. Phasellus ut orci et velit pellentesque
                consectetur.
              </p>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(objectiveStyle)(ObjectiveSection);
