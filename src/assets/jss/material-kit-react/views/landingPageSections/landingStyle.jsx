import { container, title } from "assets/jss/material-kit-react.jsx";

const landingStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    textAlign: "center",
    ...container
  },
  landingBtn: {
    backgroundColor: "#99999985",
    "&:hover": {
      backgroundColor: "#999999a6"
    }
  },
  hsep: {
    width: "50px",
    marginBottom: "25px"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  }
};

export default landingStyle;
