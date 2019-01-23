/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import { withStyles } from "@material-ui/core";
import { Link } from "react-scroll";

import navStyle from "assets/jss/material-kit-react/components/navStyle.jsx";

function Nav({ ...props }) {
  const { classes, sections } = props;

  return (
    <nav className={classes.verticalNav}>
      <ul className={classes.ul}>
        {sections.map((prop, key) => {
          return (
            <li className={classes.li} key={key}>
              <Link
                activeClass={classes.active}
                className={classes.a}
                to={prop.section}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span className={classes.dot} />
                <span className={classes.label}>{prop.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      section: PropTypes.string
    })
  ).isRequired
};

export default withStyles(navStyle)(Nav);
