import Footer from "../components/Footer";
import NavbarMain from "../components/NavBarMain";
import "animate.css";

function MyCard() {
  return (
    <>
      <NavbarMain></NavbarMain>
      <div className="mycard-container animate__animated animate__fadeIn">
        <h1>내 카드 페이지</h1>
      </div>
      <Footer></Footer>
    </>
  );
}
export default MyCard;
