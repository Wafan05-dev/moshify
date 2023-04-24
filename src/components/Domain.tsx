import Search from "./Search";

const Domain = () => {
  return (
    <section className="block container domain" data-aos="fade-up">
      <header className="block__header">
        <h2 className="domain__heading">
          The best webhosting Starting at per month
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptatibus, reprehenderit.
        </p>
      </header>
      <Search />
      <ul className="list domain__list">
        <li>.com $9.26</li>
        <li>
          <span className="badge badge--secondary">.sg $7.91</span>
        </li>
        <li>.space $12.98</li>
        <li>.info $14.15</li>
        <li>.net $16.15</li>
        <li>.xyz $10.15</li>
      </ul>
    </section>
  );
};

export default Domain;
