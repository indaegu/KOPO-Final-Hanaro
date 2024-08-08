import "../style/Footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <nav className="footer-nav">
            <ul>
              <li>회사소개</li>
              <li>경영공시</li>
              <li>웹이용약관</li>
              <li>개인정보처리 방침</li>
              <li>위치기반서비스 이용약관</li>
            </ul>
            <img
              className="footer-logo"
              src={process.env.PUBLIC_URL + "./img/logo192.png"}
              alt="Logo"
            />
          </nav>
          <address className="footer-address">
            <span>
              <b>고객센터(유료) 국내 1800-**** / 해외 82-1800-**** </b>
            </span>
            <span>
              <strong>시각장애인 전용상담센터 1599-****</strong>{" "}
            </span>
            <span>그룹사간 고객정보 제공내역 조회</span>
            <span>자주하는 질문</span>
            <span>인천광역시 서구 청라동 **</span>
            <span>
              <b>개발자 성창민</b>
            </span>
            <span>
              <b>COPYRIGHTⓒ 2024 HanaRo. All RIGHTS RESERVED</b>
            </span>
          </address>
        </div>
      </footer>
    </>
  );
}
export default Footer;
