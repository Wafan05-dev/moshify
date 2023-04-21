const Plans = () => {
  return (
    <section className="block plans">
      <div className="card card--secondary">
        <header className="card__header">
          <h3 className="card__heading">Entry</h3>
          <span className="card__price">$14</span>
          <span className="card__date">/mount</span>
          <span className="badge badge--secondary badge--small">10% Off</span>
          <p className="card__text">Easy start on the cloud</p>
        </header>
        <div className="card__body">
          <ul className="list list--tick">
            <li className="list__item">Unlimited Websites</li>
            <li className="list__item">Unlimited Bandwidth</li>
            <li className="list__item">100 GB SSD Storage</li>
            <li className="list__item">3 GB RAM</li>
          </ul>
          <button className="btn btn--outline btn--block">buy now</button>
        </div>
      </div>
      <div className="card card--primary card--popular">
        <header className="card__header">
          <h3 className="card__heading">Business</h3>
          <span className="card__price">$24</span>
          <span className="card__date">/mount</span>
          <span className="badge badge--secondary badge--small">20% Off</span>
          <p className="card__text">Optimal Cloud Experience</p>
        </header>
        <div className="card__body">
          <ul className="list list--tick">
            <li className="list__item">Unlimited Websites</li>
            <li className="list__item">Unlimited Bandwidth</li>
            <li className="list__item">100 GB SSD Storage</li>
            <li className="list__item">3 GB RAM</li>
            <li className="list__item">2 CPU Cores</li>
          </ul>
          <button className="btn btn--outline btn--block">buy now</button>
        </div>
      </div>
      <div className="card card--secondary">
        <header className="card__header">
          <h3 className="card__heading">Business plus</h3>
          <span className="card__price">$54</span>
          <span className="card__date">/mount</span>
          <span className="badge badge--secondary badge--small">10% Off</span>
          <p className="card__text">Easy start on the cloud</p>
        </header>
        <div className="card__body">
          <ul className="list list--tick">
            <li className="list__item">Unlimited Websites</li>
            <li className="list__item">Unlimited Bandwidth</li>
            <li className="list__item">100 GB SSD Storage</li>
            <li className="list__item">3 GB RAM</li>
            <li className="list__item">2 CPU Cores</li>
          </ul>
          <button className="btn btn--outline btn--block">buy now</button>
        </div>
      </div>
    </section>
  );
};

export default Plans;
