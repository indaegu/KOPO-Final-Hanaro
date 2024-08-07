import NavbarMain from "../components/NavBarMain";
import "../style/App.css";

function Main() {
  return (
    <>
      <div className="page-enter">
        <NavbarMain></NavbarMain>
        <div className={"main-container"}></div>
      </div>
    </>
  );
}

export default Main;
