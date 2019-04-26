import React from "react";
// nodejs library that concatenates classes 
import classNames from "classnames";
import { withNamespaces } from "react-i18next";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import moment from "moment";

// @material-ui/icons
import Schedule from "@material-ui/icons/Schedule";
import LocationOn from "@material-ui/icons/LocationOn";

// core components
import calendarEventStyle from "assets/jss/material-kit-react/components/calendarEventStyle.jsx";

function CalendarEvent({ t, ...props }) {
  const {
    classes,
    link,
    dayStart,
    dayEnd,
    month,
    title,
    location,
    color,
    isDisabled
  } = props;

  const cancelledClass = classNames({
    [classes.eventRowCancelled]: isDisabled
  });

  const countdown = () => {
    var hotfixmonth = month === "aoû" ? "aug" : month;
    var countdown = moment(moment().year() + hotfixmonth + dayStart, "YYYYMMMDD").diff(moment(), 'days');
    if (countdown === 0)
      return <span>{t("calendar.today")}</span>;
    else if (countdown < 0)
      return <span>{t("calendar.done")}</span>;
    else
      return <span>{t("calendar.in")} {countdown} {t("calendar.days")}</span>;
  };

  return (
    <a href={link} rel="noopener noreferrer" target="_blank">
      <div
        className={classNames(classes.eventRow, cancelledClass)}
        style={{ borderLeftColor: color }}
      >
        <div className={classes.eventCalStart}>
          <div className={classes.eventDate}>{dayStart}</div>
          <div className={classes.eventMonth}>{month}</div>
        </div>
        {dayEnd !== undefined ? (
          <div className={classes.eventCalEnd}>
            <div className={classes.eventDateEnd}>-{dayEnd}</div>
          </div>
        ) : null}
        <div className={classes.eventDetails}>
          <div className={classes.eventTitle}>{title}</div>
          <div className={classes.eventDesc}>
            <Schedule className={classes.eventIcon} /> {countdown()}
            <br />
            <LocationOn className={classes.eventIcon} /> {location}
          </div>
        </div>
      </div>
    </a>
  );
}

CalendarEvent.propTypes = {
  link: PropTypes.string,
  dayStart: PropTypes.string,
  dayEnd: PropTypes.string,
  month: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.string,
  location: PropTypes.string,
  color: PropTypes.string,
  isDisabled: PropTypes.bool
};

export default withNamespaces("translation")( 
  withStyles(calendarEventStyle)(CalendarEvent)
);
