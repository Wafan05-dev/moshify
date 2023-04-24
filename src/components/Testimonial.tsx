import Quote from "../components/Quote";
import testimonial from "../assets/images/testimonial.jpg";

const Testimonial = () => {
  return (
    <section className="block" data-aos="zoom-in">
      <header className="block__header">
        <h2>What our Customer are Saying</h2>
        <p>
          Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
          maecenas accumsan.
        </p>
      </header>
      <div className="card testimonial container">
        <div className="grid grid--cols-2">
          <div className="testimonial__image-container">
            <img
              className="testimonial__image"
              src={testimonial}
              alt="A happy smiling customer."
            />
            <div className="icon-container testimonial__icon icon-container--accent">
              <svg className="icon--small icon--white">
                <use href="../src/assets/icons/sprite.svg#quotes"></use>
              </svg>
            </div>
          </div>
          <Quote />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
