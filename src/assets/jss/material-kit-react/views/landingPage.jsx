import { container, title } from "assets/jss/material-kit-react.jsx";
import imgTeams from "assets/img/teams.jpg";
import imgSeason from "assets/img/season.jpg";

const landingPageStyle = {
  bgTeams: {
    background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(" + imgTeams + ") no-repeat center center",
    backgroundSize: "cover",
  },
  bgSeason: {
    background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(" + imgSeason + ") no-repeat center center",
    backgroundSize: "cover"
  },
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-80px auto 0",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    width: "80rem"
  },
  image: {
    width: "100%"
  }
};

export default landingPageStyle;
