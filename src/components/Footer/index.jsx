import { footerLorem } from "../../data";
import CopyrightFooter from "./CopyrightFooter";
import FooterNavigation from "./FooterNavigation";
import FooterSection from "./FooterSection";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid contenedor">
        <FooterSection title={"Nosotros"} text={footerLorem} />

        <FooterNavigation />

        <FooterSection title={"Contacto"} text={footerLorem} />
      </div>

      <CopyrightFooter text={"App Comida. Todos los derechos Reservados"} />
    </footer>
  );
};

export default Footer;
