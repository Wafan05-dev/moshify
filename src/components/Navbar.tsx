import { useState } from "react";
import logo from "../assets/images/logo.png";
import menu from "../assets/icons/sprite.svg";

const Navbar = () => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <nav
      className={
        isExpanded
          ? "collapsible collapsible--expanded navbar"
          : "collapsible navbar"
      }
    >
      <a href="/">
        <img className="nav__brand" src={logo} alt="" />
      </a>
      <svg
        onClick={() => (isExpanded ? setExpanded(false) : setExpanded(true))}
        className="icon icon--white navbar__toggler"
      >
        <use href={`${menu}#menu`}></use>
      </svg>
      <ul className="list nav__list collapsible__content">
        <li className="nav__item">
          <a href="#">Hosting</a>
        </li>
        <li className="nav__item">
          <a href="#">VPS</a>
        </li>
        <li className="nav__item">
          <a href="#">Domatin</a>
        </li>
        <li className="nav__item">
          <a href="#">Pricing</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
