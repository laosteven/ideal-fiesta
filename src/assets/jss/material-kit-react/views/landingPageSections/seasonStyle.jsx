import { container, title } from "assets/jss/material-kit-react.jsx";

const seasonStyle = {
  section: {
    padding: "100px 0 150px 0",
    textAlign: "center"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "#fff"
  },
  hsep: {
    width: "50px",
    margin: "25px auto"
  },
  description: {
    color: "#fff"
  },
  card: {
    padding: "60px 0 90px",
    textAlign: "justify"
  }
};

export default seasonStyle;
