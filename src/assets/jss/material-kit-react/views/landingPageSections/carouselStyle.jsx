import { cardTitle, container, title } from "assets/jss/material-kit-react.jsx";

const carouselStyle = {
  section: {
    padding: "100px 0 180px 0",
    textAlign: "center"
  },
  container,
  cardTitle: {
    ...cardTitle,
    color: "#fff"
  },
  description: {
    color: "#fff",
    textAlign: "justify",
    textAlignLast: "center",
    marginBottom: "50px"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "#fff"
  },
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  },
  slickIcons: {
    marginRight: "5px"
  },
  shadow: {
    textShadow: "0 1px 4px #000000, 0 1px 4px #000000"
  }
};

export default carouselStyle;
