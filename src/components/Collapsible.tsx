import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const Collapsible = () => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div
      className={
        isExpanded ? "collapsible collapsible--expanded" : "collapsible"
      }
    >
      <header className="collapsible__header">
        <h2 className="collapsible__heading">Products</h2>
        <div className="icon-container">
          <HiChevronDown
            onClick={() =>
              isExpanded ? setExpanded(false) : setExpanded(true)
            }
            className="icon icon--white collapsible__chevron"
          />
        </div>
      </header>
      <div className="collapsible__content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dolore
          qui ducimus rem veritatis vero? Voluptate recusandae porro praesentium
          hic.
        </p>
      </div>
    </div>
  );
};

export default Collapsible;
