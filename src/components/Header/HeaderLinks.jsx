/*eslint-disable*/
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import i18n from "i18next";
import { withNamespaces } from "react-i18next";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ t, ...props }) {
  const { classes } = props;

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    document.title = i18n.t("title");
  };

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          title={t("header.join")}
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          {i18n.language == "fr" ? (
            <Button
              color="transparent"
              // href="https://stevenlao.typeform.com/to/twCx5e"
              href="https://forms.gle/QNzZ1D95T7kkKAXk7"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fa fa-user-plus"} />
            </Button>
          ) : (
            <Button
              color="transparent"
              // href="https://stevenlao.typeform.com/to/XnhAe6"
              href="https://forms.gle/QNzZ1D95T7kkKAXk7"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fa fa-user-plus"} />
            </Button>
          )}
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title={t("header.facebook")}
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/BeastDragonboatClub"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title={t("header.instagram")}
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/beast_dragonboatclub"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          left
          hoverColor="danger"
          buttonIcon="fa fa-search"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            { label: "Beast Dragonboat Club", section: "#bdbc" },
            { label: "Who are we?", section: "#whoarewe" },
            { label: "Teams", section: "#teams" },
            { label: "What we do?", section: "#whatwedo" },
            { label: "Season", section: "#season" },
            { label: "Pictures", section: "#pictures" },
            { label: "About us", section: "#aboutus" }
          ]}
        />
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          hoverColor="danger"
          buttonIcon="fa fa-cog"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="login" className={classes.dropdownLink}>
              {t("header.login")}
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="language-tooltip"
          title={t("header.language")}
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          {i18n.language == "fr" ? (
            <Button
              onClick={() => changeLanguage("en")}
              color="transparent"
              target="_blank"
            >
              EN
            </Button>
          ) : (
            <Button
              onClick={() => changeLanguage("fr")}
              color="transparent"
              target="_blank"
            >
              FR
            </Button>
          )}
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withNamespaces("translation")(
  withStyles(headerLinksStyle)(HeaderLinks)
);
