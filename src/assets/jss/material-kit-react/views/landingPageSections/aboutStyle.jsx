import { container, title } from "assets/jss/material-kit-react.jsx";
import tooltip from "assets/jss/material-kit-react/tooltipsStyle.jsx";

const aboutStyle = {
  section: {
    padding: "100px 0 130px 0",
    color: "#fff"
  },
  container,
  ...tooltip,
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "#fff"
  },
  userSpacing: {
    paddingLeft: "5px"
  },
  logo: {
    width: "140px",
    marginTop: "3px",
    paddingBottom: "10px",
    filter: "brightness(0) invert(1)"
  },
  logoFooter: {
    marginTop: "-10px"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#fff"
  },
  normals: {
    marginTop: "-12px",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#fff"
  },
  description: {
    color: "#fff",
    textAlign: "justify",
    paddingTop: "10px"
  },
  margin5: {
    margin: "5px"
  },
  footer: {
    padding: "0 0.875rem"
  },
  footerButton: {
    padding: "0 1.875rem"
  }
};

export default aboutStyle;
