import { container } from "assets/jss/material-kit-react";
import tooltip from "assets/jss/material-kit-react/tooltipsStyle.jsx";

const contactStyle = {
  section: {
    padding: "50px 0 75px",
    textAlign: "center",
    color: "#000"
  },
  ...tooltip,
  container: {
    ...container,
    textAlign: "center !important"
  },
  buttonSpacing: {
    margin: "0 12px"
  }
};

export default contactStyle;
