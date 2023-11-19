import { typeColor } from "../../constants/colors";
import pokeball from "../../assets/pokeball.png";
import "../pokecard/pokecard.css";
import "./modal.css";

const Modal = ({
  handleClose,
  id,
  name,
  image,
  type,
  pokemonStats,
  stats,
  statsName,
}) => {
  return (
    <div
      className="pokemon-modal"
      style={{
        background: `linear-gradient(115deg, #fff 48%, ${typeColor[type].main} 48% 55%, ${typeColor[type].light} 55% )`,
      }}
    >
      <div onClick={handleClose} className="pokemon-modal-close">
        X
      </div>
      <div>
        <img
          src={image}
          alt={name}
          style={{ filter: "drop-sahadow(2px 4px 12px black)" }}
        />
      </div>
      <div className="pokemon-modal-info">
        <div
          className="stat-container-title"
          style={{
            background: `linear-gradient(135deg, ${typeColor[type].main} 40%, black 40%)`,
          }}
        >
          <img src={image} alt={name} className="image-title" />
          <p style={{ width: "180px", color: "black" }}>No. {id}</p>
          <p>{name}</p>
          <img
            src={pokeball}
            alt="pokeball"
            className="pokeball-title"
            style={{ width: "40px" }}
          />
        </div>
        {/* <img src={image} alt={name} /> */}
        <div style={{ display: "flex", width: "100%" }}>
          <div className="stats-left">
            <p>Type</p>
            <p>Height</p>
            <p>Weight</p>
          </div>
          <div className="stats-right">
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
    </div>
  );
};

export default Modal;
