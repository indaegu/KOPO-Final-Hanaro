import React, { useEffect, useRef, useState, useCallback } from "react";
import Navbar from "../components/NavBar";
import SectionStepper from "../components/SectionStepper";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { Center } from "@chakra-ui/react";

function Land() {
  const [activeStep, setActiveStep] = useState(1);
  const [manualScroll, setManualScroll] = useState(false);
  const sectionRefs = useRef([
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]).current;

  const scrollToSection = useCallback(
    (index) => {
      // console.log(`Scrolling to section: ${index}`);
      setManualScroll(true);
      sectionRefs[index].current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
      setTimeout(() => setManualScroll(false), 100); // 500ms 동안 스크롤 제한
    },
    [sectionRefs]
  );

  const handleScroll = useCallback(() => {
    if (manualScroll) return;
    // console.log("Handling scroll...");

    const scrollPosition = window.scrollY + window.innerHeight / 2;
    // console.log(`Scroll position: ${scrollPosition}`);

    let foundStep = sectionRefs.findIndex((ref) => {
      return (
        ref.current &&
        scrollPosition >= ref.current.offsetTop &&
        scrollPosition < ref.current.offsetTop + ref.current.offsetHeight
      );
    });

    // console.log(`Found step: ${foundStep}`);

    if (foundStep !== -1 && foundStep !== activeStep - 1) {
      // console.log(`Setting active step: ${foundStep + 1}`);
      setActiveStep(foundStep + 1);
      scrollToSection(foundStep);
    }
  }, [activeStep, manualScroll, scrollToSection, sectionRefs]);

  useEffect(() => {
    const throttledScrollHandler = throttle(handleScroll, 100);
    window.addEventListener("scroll", throttledScrollHandler);
    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
    };
  }, [handleScroll]);

  return (
    <>
      <Navbar />
      <SectionStepper activeStep={activeStep} />
      <div ref={sectionRefs[0]} className="section section1">
        <div className="overlay"></div>
        <div className="section1-text">
          <h1>
            스마트한 소비로 가는길 <b>하나로</b>{" "}
          </h1>
          <div
            className="arrowDown"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              top: "30vh",
            }}
          >
            <MdKeyboardDoubleArrowDown
              size="80"
              onClick={() => {
                // 누르면 정확히 section3에 포커싱 되는 로직
                scrollToSection(1);
              }}
            />
          </div>
        </div>
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source
              src={process.env.PUBLIC_URL + "/img/main-ann-mp4.mp4"}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div ref={sectionRefs[1]} className="section section2">
        <div className="section2-text">
          <h3>스마트한 소비</h3>
          <h1>간편한 카드 실적 및 카드 혜택 관리</h1>
          <span>모든 카드의 실적 및 혜택을 손쉽게 관리하세요</span>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/img/3d-card-section1.png"}
          className="section2-img"
        />
        <div
          className="arrowDown"
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            top: "80vh",
          }}
        >
          <MdKeyboardDoubleArrowDown
            size="80"
            onClick={() => {
              // 누르면 정확히 section3에 포커싱 되는 로직
              scrollToSection(2);
            }}
          />
        </div>
      </div>
      <div ref={sectionRefs[2]} className="section section3">
        <div className="section3-container1">
          <div className="section3-text1">
            <h3>편리한 소비</h3>
            <h1>위치기반 카드 혜택 지도</h1>
            <span>
              내 주변 가장 많은 혜택을 받는 가맹점을 선택하고 추천카드로
              결제하세요
            </span>
          </div>
          <div className="section3-img1">
            <img
              src={process.env.PUBLIC_URL + "/img/3d-map-section3.png"}
              className="section3-img"
            />
          </div>
        </div>
        <div className="section3-container2">
          <div className="section3-img2">
            <img
              src={
                process.env.PUBLIC_URL + "/img/3d-cardrecommand-section3.png"
              }
              className="section3-img"
            />
          </div>
          <div className="section3-text2">
            <h3>카드</h3>
            <h1>카드 조합 및 카드 추천</h1>
            <span>
              내 소비 내역을 기반으로 가장 적합한 카드를 추천 받아보세요
            </span>
          </div>
        </div>

        <div
          className="arrowDown"
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            top: "80vh",
          }}
        >
          <MdKeyboardDoubleArrowDown
            size="80"
            onClick={() => {
              // 누르면 정확히 section3에 포커싱 되는 로직
              scrollToSection(3);
            }}
          />
        </div>
      </div>
      <div ref={sectionRefs[3]} className="section section4">
        4번 영역 : 실시간 소비진단, 신용카드 vs 체크카드 소득공제 황금비율 제시
        <div
          className="arrowDown"
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            top: "80vh",
          }}
        >
          <MdKeyboardDoubleArrowDown
            size="80"
            onClick={() => {
              // 누르면 정확히 section3에 포커싱 되는 로직
              scrollToSection(4);
            }}
          />
        </div>
      </div>
      <div ref={sectionRefs[4]} className="section section5">
        5번 영역 : 회원가입하기 or 로그인하기
      </div>
    </>
  );
}

function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export default Land;
