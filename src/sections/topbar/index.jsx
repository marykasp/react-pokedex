import "./topbar.css";
import pokeball from "../../assets/blackpokeball.png";
import pokeballcolor from "../../assets/pokeball.png";
import { MdSearch } from "react-icons/md";

const Topbar = ({ handleSearch, query }) => {
  return (
    <div className="title">
      <div className="title__left">
        <p>Pokedex</p>
        <div className="caught-seen">
          <div className="caught">
            <img
              src={pokeballcolor}
              alt="pokemon"
              style={{ width: "30px", marginRight: "10px" }}
            />
            <p>438</p>
          </div>
          <div className="seen">
            <img
              src={pokeball}
              alt=""
              style={{ width: "30px", marginRight: "10px" }}
            />
            <p>649</p>
          </div>
        </div>
      </div>
      <div className="search-box">
        <form action="">
          <MdSearch />
          <input
            type="text"
            placeholder="search"
            id="search-input"
            name="pokemon"
            value={query}
            onChange={(e) => handleSearch(e)}
          />
        </form>
      </div>
      <p style={{ color: "white" }}>A -&gt; Z</p>
    </div>
  );
};

export default Topbar;
