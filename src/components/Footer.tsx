import Callout from "./Callout";
import FooterCollapsible from "./FooterCollapsible";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="block footer">
      <Callout />
      <div className="container grid">
        <FooterCollapsible
          header="products"
          content={[
            "WordPress Hosting",
            "Free Automated",
            "Migrations",
            "Domain Names",
            "Monthly Web Hosting",
          ]}
        />
        <FooterCollapsible
          header="company"
          content={[
            "About",
            "Affiliates",
            "Blog",
            "Careers",
            "Community",
            "News",
            "Green Hosting",
          ]}
        />
        <FooterCollapsible
          header="products"
          content={[
            "WordPress Hosting",
            "Free Automated",
            "Migrations",
            "Domain Names",
            "Monthly Web Hosting",
          ]}
        />
        <FooterCollapsible
          header="support"
          content={[
            "Contact",
            "Knowledge Base",
            "Forums",
            "System Status",
            "Web Hosting",
            "DreamCompute",
          ]}
        />
        <FooterCollapsible
          header="Domains"
          content={[
            "Domain Checker",
            "Domain Transfer",
            "Free Domain",
            "XYZ Domain",
            "Cheap SSL Certificate",
          ]}
        />
        <div className="footer__brand">
          <img className="footer__image" src={logo} alt="Website Logo" />
          <p className="footer__copyright">Copyright © 2020 mosh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
