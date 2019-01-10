import { container, title, card } from "assets/jss/material-kit-react.jsx";

const landingStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  "@media (max-width: 800px)": {
    title: {
      ...title,
      paddingTop: "30%"
    },
    gridCalendar: {
      padding: "15% 15px"
    }
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
  card: {
    ...card,
    paddingBottom: "15px"
  },
  eventContainer: {
    borderColor: "#cdcdcd",
    borderRight: "1px solid #e5e5e5",
    borderBottom: "1px solid #e5e5e5",
    borderTop: "1px solid #e5e5e5",
    borderRadius: "5px",
    overflow: "hidden"
  },
  eventRow1: {
    backgroundColor: "#f4f4f4",
    width: "100%",
    position: "relative",
    padding: "15px 0 8px",
    borderLeft: "3px solid #206177",
    borderBottom: "1px solid #e5e5e5"
  },
  eventRow2: {
    backgroundColor: "#f4f4f4",
    width: "100%",
    position: "relative",
    padding: "15px 0 8px",
    borderLeft: "3px solid #fe14d7",
    borderBottom: "1px solid #e5e5e5"
  },
  eventRow3: {
    backgroundColor: "#f4f4f4",
    width: "100%",
    position: "relative",
    padding: "15px 0 8px",
    borderLeft: "3px solid #ff9147",
    borderBottom: "1px solid #e5e5e5"
  },
  eventRowCancelled: {
    background:
      "repeating-linear-gradient( 45deg, #FDF2F2, #FDF2F2 10px, rgba(250, 250, 250, 0.5) 10px, rgba(250, 250, 250, 0.5) 20px)"
  },
  eventHeader: {
    fontWeight: "900",
    color: "#585858",
    fontFamily: '"Roboto Slab", "Helvetica", "Arial", sans-serif'
  },
  eventDate: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#585858"
  },
  eventDateEnd: {
    fontWeight: "bold",
    fontStyle: "normal",
    textTransform: "uppercase",
    color: "#585858",
    lineHeight: "110%"
  },
  eventMonth: {
    color: "#585858",
    fontSize: "11px",
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  eventCalStart: {
    color: "#808080",
    fontSize: "30px",
    padding: "0px 8px 2px 13px",
    fontWeight: "bold",
    position: "absolute",
    minHeight: "30px",
    margin: "0 6px 0 0",
    left: "0"
  },
  eventCalEnd: {
    float: "left",
    paddingLeft: "50px",
    fontSize: "14px",
    position: "relative",
    lineHeight: "100%",
    verticalAlign: "super",
    marginTop: "-1px"
  },
  eventDetails: {
    marginLeft: "5px",
    padding: "1px 15px 0 80px",
    marginBottom: "0px",
    top: "0",
    display: "block",
    margin: "0",
    lineHeight: "1.5",
    marginTop: "-8px"
  },
  eventTitle: {
    color: "#6B6B6B",
    textTransform: "uppercase",
    fontSize: "22px",
    fontWeight: "700",
    margin: "0",
    lineHeight: "120%",
    padding: "3px 0"
  },
  eventDesc: {
    color: "#8c8c8c",
    fontStyle: "normal",
    paddingLeft: "3px",
    marginRight: "5px",
    position: "relative",
    fontSize: "11px",
    marginTop: "-1px"
  },
  eventIcon: {
    fontSize: "11px"
  }
};

export default landingStyle;
