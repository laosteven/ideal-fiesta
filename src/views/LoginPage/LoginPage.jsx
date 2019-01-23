import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { withNamespaces } from "react-i18next";
// @material-ui/icons

// core components
import Button from "components/CustomButtons/Button.jsx";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/landing-bg.jpg";
import Logo from "assets/img/beast-logo.png";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      200
    );
  }
  render() {
    const { classes, t, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          brand={Logo}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 20,
            color: "danger"
          }}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(" +
              image +
              ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="danger" className={classes.cardHeader}>
                      <h4>{t("login.title")}</h4>
                    </CardHeader>
                    <p className={classes.divider}>{t("login.status")}</p>
                    <CardBody />
                    <CardFooter className={classes.cardFooter}>
                      <Link to="/" className={classes.dropdownLink}>
                        <Button color="danger">{t("login.button.back")}</Button>
                      </Link>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withNamespaces("translation")(
  withStyles(loginPageStyle)(LoginPage)
);
