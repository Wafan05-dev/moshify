import { BsArrowRight } from "react-icons/bs";

const Feature = () => {
  return (
    <section className="container block">
      <div className="block__header">
        <h2 className="block__heading">Host Оn Тhe Cloud to Keep Growing</h2>
        <p>
          Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
          maecenas accumsan.
        </p>
      </div>
      <article className="grid grid--cols-2 feature">
        <div className="feature__content">
          <div className="icon-container feature__icon">
            <svg className="icon icon--primary icon--round">
              <use href="../src/assets/icons/sprite.svg#easy"></use>
            </svg>
          </div>
          <h3 className="block__heading feature__heading">Super Easy to Use</h3>
          <p className="feature__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <a href="#" className="link-arrow">
            Learn More
            <BsArrowRight className="link__icon" />
          </a>
        </div>
        <img
          className="feature__image"
          src="../../src/assets/images/easy.jpg"
          alt=""
        />
      </article>
      <article className="grid grid--cols-2 feature">
        <div className="feature__content">
          <div className="icon-container feature__icon">
            <svg className="icon icon--primary icon--round">
              <use href="../src/assets/icons/sprite.svg#computer"></use>
            </svg>
          </div>
          <h3 className="block__heading feature__heading">
            Simply fast websites
          </h3>
          <p className="feature__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <a href="#" className="link-arrow">
            Learn More
            <BsArrowRight className="link__icon" />
          </a>
        </div>
        <img
          className="feature__image"
          src="../../src/assets/images/fast.jpg"
          alt=""
        />
      </article>
      <article className="grid grid--cols-2 feature">
        <div className="feature__content">
          <div className="icon-container feature__icon">
            <svg className="icon icon--primary icon--round">
              <use href="../src/assets/icons/sprite.svg#settings"></use>
            </svg>
          </div>
          <h3 className="block__heading feature__heading">
            WordPress made easy
          </h3>
          <p className="feature__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <a href="#" className="link-arrow">
            Learn More
            <BsArrowRight className="link__icon" />
          </a>
        </div>
        <img
          className="feature__image"
          src="../../src/assets/images/wordpress.jpg"
          alt=""
        />
      </article>
      <article className="grid grid--cols-2 feature">
        <div className="feature__content">
          <div className="icon-container feature__icon">
            <svg className="icon icon--primary icon--round">
              <use href="../src/assets/icons/sprite.svg#clock"></use>
            </svg>
          </div>
          <h3 className="block__heading feature__heading">
            24/7 Expert Support
          </h3>
          <p className="feature__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <a href="#" className="link-arrow">
            Learn More
            <BsArrowRight className="link__icon" />
          </a>
        </div>
        <img
          className="feature__image"
          src="../../src/assets/images/support.jpg"
          alt=""
        />
      </article>
    </section>
  );
};

export default Feature;
