import { dangerColor } from "assets/jss/material-kit-react.jsx";

const navStyle = {
  // "@media (max-width: 800px)": {
  //   verticalNav: {
  //     display: "none"
  //   }
  // },
  verticalNav: {
    position: "fixed",
    right: "-140px",
    top: "50%",
    bottom: "auto",
    transform: "translateY(-50%)",
    zIndex: "900",
    "& a": {
      display: "inline-block",
      backfaceVisibility: "hidden",
      width: "100%",
    },
    "& span": {
      float: "right",
      display: "inline-block",
      transform: "scale(.6)"
    },
    "& a:hover span": {
      transform: "scale(1)"
    },
    "& a:hover $label": {
      opacity: "1",
      left: "-100%",
      transition: "transform .2s, opacity .2s"
    }
  },
  ul: {
    listStyle: "none",
    padding: "0"
  },
  li: {
    textAlign: "right"
  },
  a: {
    color: dangerColor,
    backgroundColor: "transparent",
    cursor: "pointer",
    "&:hover, &:focus": {
      textDcoration: "none"
    },
    "&:after": {
      content: "",
      display: "table",
      clear: "both"
    }
  },
  active: {
    "& span": {
      transform: "scale(1)"
    }
  },
  dot: {
    position: "relative",
    top: "8px",
    right: "calc(100% - 15px)",
    height: "10px",
    width: "10px",
    borderRadius: "50%",
    backgroundColor: dangerColor,
    transition:
      "transform .2s, background-color .5s, -webkit-transform .2s",
    transformOrigin: "50% 50%"
  },
  label: {
    position: "relative",
    marginRight: "10px",
    padding: "4px 14px",
    color: "#fff",
    background: "rgba(0, 0, 0, .53)",
    fontSize: "10px",
    borderRadius: "20px",
    textTransform: "uppercase",
    fontWeight: "600",
    opacity: "0",
    transformOrigin: "100% 50%"
  }
};
export default navStyle;
