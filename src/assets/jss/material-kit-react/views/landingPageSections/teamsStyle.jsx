import { cardTitle, title } from "assets/jss/material-kit-react.jsx";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx";

const teamsStyle = {
  section: {
    padding: "140px 0",
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
    textTransform: "uppercase"
  },
  description: {
    color: "#fff",
    textAlign: "justify",
    textAlignLast: "center",
    marginBottom: "50px"
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
  margin5: {
    margin: "5px"
  },
  teamImages: {
    height: "150px",
    marginBottom: "15px"
  }
};

export default teamsStyle;
