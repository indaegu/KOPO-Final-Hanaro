import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  Button,
  Portal,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { CiCreditCard1 } from "react-icons/ci";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegMap } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";

function NavbarMain() {
  let [font] = useState("text-black");
  let [logoColor] = useState("black-image"); // black-image로 하면 흑백 로고로 변경됨, 기존은 비워둬도 됨
  let [hamburgerColor] = useState("black-image");

  let navigate = useNavigate();
  return (
    <nav className="navbar-main">
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
  const [imageSrc] = useState(process.env.PUBLIC_URL + "/img/hamburgerImg.png");

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

export default NavbarMain;
