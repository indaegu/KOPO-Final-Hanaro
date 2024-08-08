import React from "react";
import CountUp from "react-countup";

function AnimatedNumber({ value }) {
  return (
    <CountUp
      start={0}
      end={value}
      duration={2.3}
      separator=","
      decimals={value % 1 === 0 ? 0 : 2} // 소수점 처리
      decimal="."
      prefix=""
      suffix="원"
    />
  );
}

export default AnimatedNumber;
