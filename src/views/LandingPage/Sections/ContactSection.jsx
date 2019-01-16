import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

import contactStyle from "assets/jss/material-kit-react/views/landingPageSections/contactStyle.jsx";

class ContactSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>Questions? Contact us!</h2>

              <Tooltip
                title="Facebook"
                placement={"bottom"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  className={classes.buttonSpacing}
                  href="https://www.facebook.com/BeastDragonboatClub"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="danger"
                  round
                  justIcon
                >
                  <i className={"fab fa-facebook"} />
                </Button>
              </Tooltip>

              <Tooltip
                title="Email"
                placement={"bottom"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  className={classes.buttonSpacing}
                  href="mailto:beast.dragonboat.club@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="danger"
                  round
                  justIcon
                >
                  <i className={"fa fa-envelope"} />
                </Button>
              </Tooltip>

              <Tooltip
                title="Messenger"
                placement={"bottom"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  className={classes.buttonSpacing}
                  href="https://m.me/BeastDragonboatClub"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="danger"
                  round
                  justIcon
                >
                  <i className={"fab fa-facebook-messenger"} />
                </Button>
              </Tooltip>

              {/* 
              <Tooltip
                title="Phone"
                placement={"bottom"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  className={classes.buttonSpacing}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="danger"
                  round
                  justIcon
                >
                  <i className={"fa fa-phone"} />
                </Button>
              </Tooltip> */}
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(contactStyle)(ContactSection);
