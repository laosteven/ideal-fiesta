import { container, title } from "assets/jss/material-kit-react.jsx";

const landingStyle = {
  "@media (max-width: 800px)": {
    title: {
      ...title,
      paddingTop: "30%"
    },
    gridCalendar: {
      padding: "15% 15px"
    }
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
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center"
  },
  eventContainer: {
    borderColor: "#cdcdcd",
    borderRight: "1px solid #e5e5e5",
    borderBottom: "1px solid #e5e5e5",
    borderTop: "1px solid #e5e5e5",
    borderRadius: "5px",
    overflow: "hidden",
    marginBottom: "15px"
  },
  eventHeader: {
    fontWeight: "900",
    color: "#585858",
    fontFamily: '"Roboto Slab", "Helvetica", "Arial", sans-serif'
  },
  link: {
    color: "#FFFFFF",
    "&:hover, &:focus": {
      color: "#FFFFFF"
    },
  }
};

export default landingStyle;
