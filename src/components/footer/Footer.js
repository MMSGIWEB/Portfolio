function Footer({ img, copyRights }) {
  return (
    <div className="footer">
      <img src={img} alt="logo kasa" className="footerLogo" />
      <h3 className="footerCopyRights">{copyRights}</h3>
    </div>
  );
}

export default Footer;
