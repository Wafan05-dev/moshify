const Search = () => {
  return (
    <div className="input-group">
      <input
        className="input"
        type="search"
        placeholder="Enter domain name here ..."
      ></input>
      <button className="btn btn--accent">
        <div className="input__button">
          <svg className="icon">
            <use href="../src/assets/icons/sprite.svg#search"></use>
          </svg>
          search
        </div>
      </button>
    </div>
  );
};

export default Search;
