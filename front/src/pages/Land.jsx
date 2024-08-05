import React, { useEffect, useRef, useState, useCallback } from "react";
import Navbar from "../components/NavBar";
import SectionStepper from "../components/SectionStepper";

function Land() {
  const [activeStep, setActiveStep] = useState(1);
  const [manualScroll, setManualScroll] = useState(false);
  const sectionRefs = useRef([
    useRef(null),
    useRef(null),
    useRef(null),
  ]).current;

  const scrollToSection = useCallback(
    (index) => {
      console.log(`Scrolling to section: ${index}`);
      setManualScroll(true);
      sectionRefs[index].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setTimeout(() => setManualScroll(false), 500); // 500ms 동안 스크롤 제한
    },
    [sectionRefs]
  );

  const handleScroll = useCallback(() => {
    if (manualScroll) return;
    console.log("Handling scroll...");

    const scrollPosition = window.scrollY + window.innerHeight / 2;
    console.log(`Scroll position: ${scrollPosition}`);

    let foundStep = sectionRefs.findIndex((ref) => {
      return (
        ref.current &&
        scrollPosition >= ref.current.offsetTop &&
        scrollPosition < ref.current.offsetTop + ref.current.offsetHeight
      );
    });

    console.log(`Found step: ${foundStep}`);

    if (foundStep !== -1 && foundStep !== activeStep - 1) {
      console.log(`Setting active step: ${foundStep + 1}`);
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
          <div>최고혜택으로 가는 가장 빠른길!</div>
          <div>하나로!</div>
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
        2번 영역 : 상품에 대한 소개가 들어감
      </div>
      <div ref={sectionRefs[2]} className="section section3">
        3번 영역 : 회원가입하기 or 로그인하기
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
