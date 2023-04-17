const Quote = () => {
  return (
    <blockquote className="quote">
      <p className="quote__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
        facere, magni tempora nobis corporis assumenda maxime aliquid
        perspiciatis consequuntur dicta!
      </p>
      <footer>
        <div className="media">
          <div className="media__image">
            <svg className="icon icon--primary">
              <use href="../src/assets/icons/sprite.svg#line"></use>
            </svg>
          </div>
          <div className="media__body">
            <h3 className="media__heading quote__author">Jhone Lumeo</h3>
            <p className="media__description quote__description">
              Mosh Company ceo
            </p>
          </div>
        </div>
      </footer>
    </blockquote>
  );
};

export default Quote;
