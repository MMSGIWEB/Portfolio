import logo from '../../assets/images/logo/logolast.png'

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="logo kasa" className="footerLogo" />
      <h3 className="footerCopyRights">© 2024 MariaIntWeb. Tous droits réservés</h3>
    </div>
  );
}

export default Footer;
