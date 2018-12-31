import { cardTitle, title } from "assets/jss/material-kit-react.jsx";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx";

const teamsStyle = {
  section: {
    padding: "100px 0 150px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "#fff"
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle: {
    ...cardTitle,
    color: "#fff",
    fontFamily: '"Roboto Slab", "Helvetica", "Arial", sans-serif'
  },
  description: {
    color: "#fff"
  },
  justifyCenter: {
    justifyContent: "center !important"
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
  hsep: {
    width: "50px",
    margin: "25px auto"
  },
  margin5: {
    margin: "5px"
  },
  teamImages: {
    height: "150px",
    marginBottom: "15px"
  }
};

export default teamsStyle;
