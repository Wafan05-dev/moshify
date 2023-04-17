import Quote from "../components/Quote";

const Testimonial = () => {
  return (
    <div className="card testimonial">
      <div className="grid grid--cols-2">
        <div className="testimonial__image-container">
          <img
            className="testimonial__image"
            src="../../src/assets/images/testimonial.jpg"
            alt="A happy smiling customer."
          />
          <div className="icon-container testimonial__icon icon-container--accent">
            <svg className="icon--small icon--accent">
              <use href="../src/assets/icons/sprite.svg#quotes"></use>
            </svg>
          </div>
        </div>
        <Quote />
      </div>
    </div>
  );
};

export default Testimonial;
