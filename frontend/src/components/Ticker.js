import React from "react";
import CountUp from 'react-countup';

const Ticker = (props) => {

  return (
    <div className={props.wrapperClass}>
    <CountUp end={props.end}>
    </CountUp>
    </div>
  )
}

export default Ticker