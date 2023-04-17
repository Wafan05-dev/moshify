const Media = () => {
  return (
    <div className="media">
      <div className="media__image">
        <svg className="icon icon--primary">
          <use href="../src/assets/icons/sprite.svg#growth"></use>
        </svg>
      </div>
      <div className="media__body">
        <h3 className="media__heading">Staging, Git & WP-CLI</h3>
        <p className="media__description">
          We make your WordPress and WooCommerce development flow easier with a
          convenient staging tool and Git and WP-CLI integration.
        </p>
      </div>
    </div>
  );
};

export default Media;
