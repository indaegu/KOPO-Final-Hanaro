import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../style/App.css"; // 스타일을 위한 CSS 파일
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  ButtonGroup,
  Portal,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";

import { CiCreditCard1 } from "react-icons/ci";
import {
  FaMagnifyingGlass,
  FaPersonWalkingDashedLineArrowRight,
} from "react-icons/fa6";
import { FaRegMap } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";

function Navbar() {
  let [font, setFonts] = useState("text-white");
  let [logoColor, setLogoColor] = useState("white-image");
  let [hamburgerColor, setHamburgerColor] = useState("white-image");

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 위치에 따라 폰트 색상을 변경
      if (window.scrollY >= window.innerHeight && window.scrollY < 2598) {
        setFonts("text-black");
        setLogoColor("");
        setHamburgerColor("");
      } else if (window.scrollY > 2598) {
        setFonts("text-white");
        setLogoColor("white-image");
        setHamburgerColor("white-image");
      } else {
        setFonts("text-white");
        setLogoColor("white-image");
        setHamburgerColor("white-image");
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 스크롤 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  let navigate = useNavigate();
  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          className={"logo-img " + logoColor}
          src={process.env.PUBLIC_URL + "./img/logo192.png"}
          alt="Logo"
        />
      </div>
      <div className="nav-menu">
        <Link to="/mycard" className={"nav-link " + font}>
          <NavLinkImage
            text="내 카드"
            imgUrl={process.env.PUBLIC_URL + "/img/credit-card-png.png"}
            font={font}
            icon={0}
          />
        </Link>
        <Link to="/findcard" className={"nav-link " + font}>
          <NavLinkImage
            text="카드 찾기"
            imgUrl={process.env.PUBLIC_URL + "./img/magnifying-png.png"}
            icon={1}
          />
        </Link>
        <Link to="/map" className={"nav-link " + font}>
          <NavLinkImage
            text="혜택 지도"
            imgUrl={process.env.PUBLIC_URL + "./img/map-png.png"}
            icon={2}
          />
        </Link>
        <Link to="/login" className={"nav-link " + font}>
          <NavLinkImage
            text="로그인"
            imgUrl={process.env.PUBLIC_URL + "./img/sign-in-png.png"}
            icon={3}
          />
        </Link>
      </div>
      <div className={"hamburger-menu " + hamburgerColor}>
        <HamburgerDrawer />
      </div>
    </nav>
  );
}

export function Hamburger() {
  return (
    <Popover>
      <PopoverTrigger>
        <img
          src={process.env.PUBLIC_URL + "./img/hamburgerImg.png"}
          alt="Logo"
        />
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>성하나님 안녕하세요!</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody></PopoverBody>
          <PopoverFooter>This is the footer</PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}

export function HamburgerDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [imageSrc, setImageSrc] = useState(
    process.env.PUBLIC_URL + "/img/hamburgerImg.png"
  );

  return (
    <>
      <img
        ref={btnRef}
        onClick={onOpen}
        src={imageSrc}
        alt="Logo"
        className="hamburger-menu"
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>성하나님 안녕하세요!</DrawerHeader>

          <DrawerBody display="flex" flexDirection="column">
            <Button mb={3}>내 정보</Button>
            <Button mb={3}>자산 연결 관리</Button>
            <Button mb={3}>카드 목록 관리</Button>
            <Button mb={3}>고객센터</Button>
            <Button mb={3}>공지사항</Button>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function NavLinkImage(props, { font }) {
  const [hover, setHover] = useState(false);
  const icons = [
    <CiCreditCard1 size="50" style={{ opacity: hover ? 1 : 0 }} />,
    <FaMagnifyingGlass size="30" style={{ opacity: hover ? 1 : 0 }} />,
    <FaRegMap size="30" className={font} style={{ opacity: hover ? 1 : 0 }} />,
    <RiLoginBoxLine size="30" style={{ opacity: hover ? 1 : 0 }} />,
  ];
  return (
    <div
      className="nav-link"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span style={{ opacity: hover ? 0 : 1 }}>{props.text}</span>
      {icons[props.icon]}
    </div>
  );
}

export default Navbar;
