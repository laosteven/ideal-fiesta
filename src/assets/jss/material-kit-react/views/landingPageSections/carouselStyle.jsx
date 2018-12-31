import { cardTitle, container, title } from "assets/jss/material-kit-react.jsx";

const carouselStyle = {
  section: {
    padding: "120px 0 140px 0",
    textAlign: "center"
  },
  container,
  cardTitle: {
    ...cardTitle,
    color: "#fff"
  },
  description: {
    color: "#fff"
  },
  hsep: {
    width: "50px",
    margin: "25px auto"
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
  }
};

export default carouselStyle;
