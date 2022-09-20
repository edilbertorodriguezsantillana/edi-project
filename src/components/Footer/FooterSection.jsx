const FooterSection = ({ title, text }) => {
  return (
    <div className="footer__widget">
      <h3 className="footer__heading">{title}</h3>
      <p className="footer__texto">{text}</p>
    </div>
  );
};

export default FooterSection;
