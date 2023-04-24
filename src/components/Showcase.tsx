import ipad from "../assets/images/ipad.png";

const Showcase = () => {
  return (
    <section className="block block--dark block--skewed-right showcase">
      <h2 className="block__heading block__header showcase__heading">
        User-Friendly Control Panel
      </h2>
      <div className="grid grid--cols-2 container">
        <img
          data-aos="fade-right"
          className="showcase__image"
          src={ipad}
          alt="An ipad"
        />
        <div className="showcase__medias" data-aos="fade-up">
          <div className="media">
            <div className="media__image">
              <svg className="icon icon--primary">
                <use href="../src/assets/icons/sprite.svg#easy"></use>
              </svg>
            </div>
            <div className="media__body">
              <h3 className="media__heading">Easy Start & Managed Updates</h3>
              <p className="media__description">
                Our cloud plans include easy onboarding for new and existing
                sites and managed WordPress and WooCommerce auto-updates.
              </p>
            </div>
          </div>
          <div className="media">
            <div className="media__image">
              <svg className="icon icon--primary">
                <use href="../src/assets/icons/sprite.svg#growth"></use>
              </svg>
            </div>
            <div className="media__body">
              <h3 className="media__heading">Staging, Git & WP-CLI</h3>
              <p className="media__description">
                We make your WordPress and WooCommerce development flow easier
                with a convenient staging tool and Git and WP-CLI integration.
              </p>
            </div>
          </div>
          <div className="media">
            <div className="media__image">
              <svg className="icon icon--primary">
                <use href="../src/assets/icons/sprite.svg#wordpress"></use>
              </svg>
            </div>
            <div className="media__body">
              <h3 className="media__heading">Dynamic Caching & More</h3>
              <p className="media__description">
                Speed up your WordPress and Woo sites with our SG Optimizer
                plugin through smart dynamic caching and multiple other
                performance optimizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
