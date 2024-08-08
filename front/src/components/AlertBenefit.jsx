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
function AlertBenefit() {
  let [card1, setCard1] = useState();
  let [card2, setCard2] = useState();

  return (
    <>
      <div className="alertbenefit-container">
        <div className="alertbenfit-title-container">
          <span>최근 지출</span>
        </div>
        <div className="alertbenefit-card-container">
          <img
            className={"alertbenefit-card-img "}
            src={process.env.PUBLIC_URL + "./card-img/card6.gif"}
            alt="card1"
          />
          <IoMdArrowDropright style={{ fontSize: "50px", color: "gray" }} />
          <img
            className={"alertbenefit-card-img"}
            src={process.env.PUBLIC_URL + "./card-img/card5.gif"}
            alt="card2"
          />
        </div>
        <div className="alertbenefit-text-container">
          <span className="alertbenefit-text-title">
            {latsPaymentData.paymentName}
          </span>
          <span className="alertbenefit-text-price">
            <AnimatedNumber value={latsPaymentData.amount} />
          </span>
          <div className="alertbenefit-price-container">
            <span
              className="alertbenefit-price-past-benefit"
              style={{ color: "gray" }}
            >
              {latsPaymentData.pastBenefit}원
            </span>
            <IoMdArrowDropright style={{ fontSize: "30px", color: "gray" }} />
            <span
              className="alertbenefit-price-future-benefit"
              style={{ color: "rgb(8, 111, 238)" }}
            >
              {latsPaymentData.futureBenefit}원
            </span>
          </div>
        </div>
        <hr style={{ margin: "0px 20px" }} />
      </div>
    </>
  );
}

export default AlertBenefit;
