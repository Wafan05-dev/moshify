import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

interface Props {
  header: string;
  content: string[];
}

const FooterCollapsible = ({ header, content }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <section
      className={
        isExpanded
          ? "collapsible collapsible--expanded footer__section"
          : "collapsible footer__section"
      }
    >
      <div className="collapsible__header">
        <h2 className="collapsible__heading footer__heading">{header}</h2>
        <div className="icon-container footer__icons">
          <HiChevronDown
            onClick={() =>
              isExpanded ? setExpanded(false) : setExpanded(true)
            }
            className="icon icon--white collapsible__chevron"
          />
        </div>
      </div>
      <ul className="list collapsible__content footer__list">
        {content.map((item) => (
          <li key={item} className="list__item">
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterCollapsible;
