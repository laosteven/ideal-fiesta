import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { withNamespaces } from "react-i18next";
import i18n from "i18next";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

import introductionStyle from "assets/jss/material-kit-react/views/landingPageSections/introductionStyle.jsx";
import United from "assets/img/United.png";

class IntroductionSection extends React.Component {
  render() {
    const { classes, t } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={5}>
            <img className={classes.united} src={United} alt="United Beast" />
          </GridItem>
          <GridItem xs={12} sm={12} md={7}>
            <h2 className={classes.title}>{t("introduction.title")}</h2>
            <p className={classes.justify}>
              {t("introduction.paragraph.1")}
              <br />
              <br />
              {t("introduction.paragraph.2")}
              <br />
              <br />
              {t("introduction.paragraph.3")}
            </p>

            {i18n.language === "fr" ? (
              <Button
                target="_blank"
                rel="noopener noreferrer"
                // href="https://stevenlao.typeform.com/to/twCx5e"
                href="https://forms.gle/QNzZ1D95T7kkKAXk7"
                color="danger"
                round
              >
                {t("introduction.join")}
                <i className={classes.userSpacing + " fa fa-user-plus"} />
              </Button>
            ) : (
              <Button
                target="_blank"
                rel="noopener noreferrer"
                // href="https://stevenlao.typeform.com/to/XnhAe6"
                href="https://forms.gle/QNzZ1D95T7kkKAXk7"
                color="danger"
                round
              >
                {t("introduction.join")}
                <i className={classes.userSpacing + " fa fa-user-plus"} />
              </Button>
            )}
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withNamespaces("translation")(
  withStyles(introductionStyle)(IntroductionSection)
);
