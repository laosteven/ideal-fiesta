import { container } from "assets/jss/material-kit-react.jsx";
import imgTeams from "assets/img/teams.jpg";
import imgSeason from "assets/img/season.jpg";
import imgFooter from "assets/img/footer.jpg";

const landingPageStyle = {
  bgTeams: {
    background:
      "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(" +
      imgTeams +
      ") no-repeat center center",
    backgroundSize: "cover"
  },
  bgSeason: {
    background:
      "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(" +
      imgSeason +
      ") no-repeat center center",
    backgroundSize: "cover"
  },
  bgFooter: {
    background:
      "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(" +
      imgFooter +
      ") no-repeat center center",
    backgroundSize: "cover"
  },
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  grey: {
    background: "#E5E5E5"
  }
};

export default landingPageStyle;
