import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  parseISO,
  differenceInMilliseconds,
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  sub,
} from "date-fns";

const TimerBack = (props) => {
  const { title, dataStr } = props;
  const date = parseISO(dataStr);
  const [timeRemainder, setTimeRemainder] = useState("");
  useEffect(() => {
    const idInterval = setInterval(() => {
      const now = new Date();
      const days = differenceInDays(date, now);
      const hours = differenceInHours(sub(date, { days }), now);
      const minutes = differenceInMinutes(sub(date, { days, hours }), now);
      const seconds = differenceInSeconds(
        sub(date, { days, hours, minutes }),
        now,
      );
      const milliseconds = differenceInMilliseconds(
        sub(date, { days, hours, minutes, seconds }),
        now,
      );
      if (
        days <= 0 &&
        hours <= 0 &&
        minutes <= 0 &&
        seconds <= 0 &&
        milliseconds <= 0
      ) {
        setTimeRemainder("Time Out");
      } else {
        setTimeRemainder(
          `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds, ${milliseconds} milliseconds`,
        );
      }
    }, 1);
    return () => {
      clearInterval(idInterval);
    };
  }, [date]);
  return (
    <div>
      <h2>Timer Back to {title}</h2>
      <h2>{dataStr}</h2>
      <h2>Remainder: {timeRemainder}</h2>
    </div>
  );
};

TimerBack.propTypes = {
  title: PropTypes.string,
  dataStr: PropTypes.string,
};

export default TimerBack;
