const Search = () => {
  return (
    <div className="input-group" data-aos="fade-up">
      <input
        className="input"
        type="search"
        placeholder="Enter domain name here ..."
      ></input>
      <button className="btn btn--accent input__button">
        <svg className="icon">
          <use href="../src/assets/icons/sprite.svg#search"></use>
        </svg>
        search
      </button>
    </div>
  );
};

export default Search;
