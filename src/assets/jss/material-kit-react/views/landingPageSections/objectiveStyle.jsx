import { title } from "assets/jss/material-kit-react.jsx";

import Teams from "assets/img/teams.jpg";
import Building from "assets/img/team-building.jpg";
import Outdoor from "assets/img/outdoor.jpg";

const objectiveStyle = {
  section: {
    padding: "100px 0 150px 0",
    textAlign: "center",
    color: "#000"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  justify: {
    textAlign: "justify"
  },
  subTitle: {
    textAlign: "left",
    paddingTop: "20px",
    fontFamily: '"Roboto Slab", "Helvetica", "Arial", sans-serif'
  },
  image: {
    maxWidth: "100%",
    display: "block",
    margin: "0 auto",
    boxShadow:
      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    borderRadius: "6px"
  },
  userSpacing: {
    paddingLeft: "5px"
  },
  hsep: {
    width: "50px",
    margin: "25px auto"
  },
  subSection: {
    padding: "40px 0"
  },
  imageBlur: {
    top: "12px",
    left: "16px",
    width: "92%",
    filter: "blur(12px)",
    height: "100%",
    zIndex: "-1",
    opacity: "0",
    position: "absolute",
    transform: "scale(0.94)",
    transition: "opacity .45s",
    backgroundSize: "cover"
  },
  imageTeams: {
    backgroundImage: "url(" + Teams + ")",
    opacity: "1"
  },
  imageBuilding: {
    backgroundImage: "url(" + Building + ")",
    opacity: "1"
  },
  imageOutdoor: {
    backgroundImage: "url(" + Outdoor + ")",
    opacity: "1"
  }
};

export default objectiveStyle;
