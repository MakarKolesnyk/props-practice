import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { parseISO, differenceInSeconds, formatDistanceToNow } from "date-fns";

const TimerBack = (props) => {
  const { title, dataStr } = props;
  const date = parseISO(dataStr);
  const [timeRemainder, setTimeRemainder] = useState("");
  useEffect(() => {
    const idInterval = setInterval(() => {
      //   const now = new Date();
      //   const secRemainder = differenceInSeconds(date, now);
      //  setTimeRemainder(secRemainder)

      // setTimeRemainder(formatDistanceToNow(date))

      
    }, 1000);
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
