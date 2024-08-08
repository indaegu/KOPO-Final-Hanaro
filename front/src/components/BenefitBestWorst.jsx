import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import AnimatedNumber from "./AnimatedNumber";

import { IoIosArrowForward } from "react-icons/io";

const priceData = { price: "593966" };

const benefitData = { benefit: "1955" };

const paymentItemData = [
  { category: "렌탈", amount: "180000", benefit: "1955" },
  { category: "소셜커머스", amount: "128000", benefit: "1912" },
  { category: "금융", amount: "6000", benefit: "123" },
  { category: "주유소", amount: "18000", benefit: "1955" },
  { category: "음식점", amount: "12800", benefit: "1912" },
  { category: "커피", amount: "600", benefit: "123" },
];

function formatNumber(num) {
  return parseInt(num).toLocaleString();
}

// 비율을 계산하는 함수를 수정
function amountBenefitRatio(item) {
  return (parseInt(item.benefit) / parseInt(item.amount)) * 100;
}

const sortedPaymentData = [...paymentItemData].sort(
  (a, b) => amountBenefitRatio(a) - amountBenefitRatio(b)
);

// 하위 3개와 상위 3개 데이터를 추출합니다.
const lowerThree = sortedPaymentData.slice(0, 3);
const upperThree = sortedPaymentData.slice(-3).reverse();

function BenefitBestWorst() {
  const [price, setPrice] = useState(priceData.price);
  const [benefit, setBenefit] = useState(benefitData.benefit);
  return (
    <>
      <div className="benefitbestworst-container">
        <div className="benefitbestworst-top">
          <span>08월 소비</span>
          <Link to="/chart">
            소비 내역
            <IoIosArrowForward />
          </Link>
        </div>
        <div className="benefitbestworst-middle">
          <div className="benefitbestworst-price">
            <AnimatedNumber value={price} />
          </div>
          <div className="benefitbestworst-benefit">
            받은 혜택 <AnimatedNumber value={benefit} />
          </div>
        </div>
        <div className="benefitbestworst-slidebar">
          <Tabs position="relative" variant="unstyled">
            <TabList>
              <Tab>혜택 아쉬운</Tab>
              <Tab>혜택 잘받은</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="blue.500"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel>
                {lowerThree.map((item, index) => (
                  <div key={index} className="payment-item-container">
                    <div>{item.category}</div>
                    <div className="payment-item-content-container">
                      <div className="payment-item-content-price">
                        {formatNumber(item.amount)}원
                      </div>
                      <div className="payment-item-content-benefit-bad">
                        {" "}
                        {formatNumber(item.benefit)}원{" "}
                        {amountBenefitRatio(item).toFixed(2)}%
                      </div>
                    </div>
                  </div>
                ))}
              </TabPanel>
              <TabPanel>
                <div>
                  {upperThree.map((item, index) => (
                    <div key={index} className="payment-item-container">
                      <div>{item.category}</div>
                      <div className="payment-item-content-container">
                        <div className="payment-item-content-price">
                          {formatNumber(item.amount)}원
                        </div>
                        <div className="payment-item-content-benefit-good">
                          {" "}
                          {formatNumber(item.benefit)}원{" "}
                          {amountBenefitRatio(item).toFixed(2)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default BenefitBestWorst;
