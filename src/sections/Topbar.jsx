import "./topbar.css";
import pokeball from "../assets/blackpokeball.png";
import pokeballcolor from "../assets/pokeball.png";

const Topbar = () => {
  return (
    <div className="title">
      <div className="title__left">
        <p>Pokedex</p>
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
            style={{ width: "40px", marginRight: "10px" }}
          />
          <p>649</p>
        </div>
      </div>
      <p style={{ color: "white" }}>A -&gt; Z</p>
    </div>
  );
};

export default Topbar;
