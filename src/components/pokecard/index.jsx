import "./pokecard.css";
import pokeball from "../../assets/pokeball.png";
import { useState } from "react";

const PokemonCard = ({
  pokemonStats,
  id,
  image,
  name,
  type,
  stats,
  statsName,
}) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="container">
      <div className="show">
        <div className="stat-container-title">
          <img src={image} alt={name} className="image-title" />
          <p style={{ width: "180px", color: "black" }}>No. {id}</p>
          <p>{name}</p>
          <img src={pokeball} alt="pokeball" className="pokeball-title" />
        </div>
        <img src={image} alt={name} />
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{ background: "#dbdbd9", textAlign: "center" }}
            className="stats-left"
          >
            <p>Type</p>
            <p>Height</p>
            <p>Weight</p>
          </div>
          <div style={{ background: "#ffffff" }} className="stats-right">
            <p>{type}</p>
            <p>{pokemonStats.height}0 cm</p>
            <p>{pokemonStats.weight} lbs</p>
          </div>
        </div>
        <div className="base-stats">
          <div>
            {statsName.map((stat, idx) => (
              <p className="stats" key={`${stat}-${idx}`}>
                {stat}
              </p>
            ))}
          </div>
          <div>
            {stats.map((stat, idx) => (
              <p className="stats" key={`stat-type-${idx}`}>
                {stat}
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* small list information - make separate component */}
      <div
        className="right"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <img
          src={image}
          alt={name}
          style={{ maxHeight: "50px", marginRight: "10px", width: "50px" }}
        />
        <p style={{ width: "270px" }}>No. {id}</p>
        <p>{name}</p>
        <img
          src={pokeball}
          alt="pokeball"
          style={{ marginLeft: "auto", width: "40px" }}
        />
      </div>
    </div>
  );
};

export default PokemonCard;
