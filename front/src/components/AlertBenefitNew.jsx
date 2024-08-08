/*eslint-disable*/

import { useState } from "react";

import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";
import AnimatedNumber from "./AnimatedNumber";

const latsPaymentData = {
  amount: "7851",
  paymentName: "스타벅스 철산점",
  pastBenefit: "256",
  futureBenefit: "600",
  pastCardName: "Jade Classic",
  futureCardName: "One the Card",
};

function AlertBenefitNew() {
  return (
    <>
      <div className="alertbenefitnew-container"></div>
    </>
  );
}
export default AlertBenefitNew;
