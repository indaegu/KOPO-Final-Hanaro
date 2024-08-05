import React, { useState } from "react";
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

function Navbar() {
  let navigate = useNavigate();
  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={process.env.PUBLIC_URL + "./img/logo192.png"} alt="Logo" />
      </div>
      <div className="nav-menu">
        <Link to="/mycard" className="nav-link">
          내 카드
        </Link>
        <Link to="/findcard" className="nav-link">
          카드 찾기
        </Link>
        <Link to="/map" className="nav-link">
          혜택 지도
        </Link>
        <Link to="/login" className="nav-link">
          로그인
        </Link>
      </div>
      <div className="hamburger-menu">
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
export default Navbar;
