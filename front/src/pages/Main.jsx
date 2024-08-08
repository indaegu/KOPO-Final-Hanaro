import AlertBenefitNew from "../components/AlertBenefitNew";
import AlertBenefit from "../components/AlertBenefit";
import BenefitBestWorst from "../components/BenefitBestWorst";
import Footer from "../components/Footer";
import NavbarMain from "../components/NavBarMain";
import Card3d from "../components/Card3d";
import "../style/App.css";
import "../style/Main.css";
import "animate.css";

function Main() {
  return (
    <>
      <NavbarMain></NavbarMain>
      <div className="main-back animate__animated animate__fadeIn">
        <div className={"main-container"}>
          <Card3d></Card3d>
          <div className="main-inner-container">
            <AlertBenefit></AlertBenefit>
            <BenefitBestWorst></BenefitBestWorst>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Main;
