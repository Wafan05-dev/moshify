import heroImage from "../assets/images/banner.png";

const Hero = () => {
  return (
    <section className="block block--dark block--skewed-left hero">
      <div className="container grid grid grid--cols-2">
        <header className="block__header hero__content" data-aos="fade-right">
          <h1 className="block__heading hero__heading">
            Cloud Hosting for Pros
          </h1>
          <p className="hero__tagline">
            Deploy your website in less than 60 seconds.
          </p>
          <a href="#" className="btn btn--accent btn--streched">
            get started
          </a>
        </header>
        <img
          className="hero__image"
          src={heroImage}
          alt=""
          data-aos="zoom-out"
        />
      </div>
    </section>
  );
};

export default Hero;
