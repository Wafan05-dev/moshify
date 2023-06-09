import search from "../assets/icons/sprite.svg";

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
          <use href={`${search}#search`} id="search"></use>
        </svg>
        search
      </button>
    </div>
  );
};

export default Search;
