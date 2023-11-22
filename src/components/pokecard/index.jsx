import { useState } from "react";

import pokeball from "../../assets/pokeball.png";
import Modal from "../modal";
import { typeColor } from "../../constants/colors";
import "./pokecard.css";

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
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="container">
      {isShown && (
        <div
          className="pokemon-card"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${typeColor[type].main} 36%, #fff 36%)`,
          }}
        >
          <div className="info">
            <p className="hp">
              <span>HP</span> {stats[0]}
            </p>
            <p className="pokemon-id">
              <span>#</span>
              {id}
            </p>
          </div>
          <img src={image} alt="" />
          <h2 className="pokemon-name">{name}</h2>
          <div className="types"></div>
          <div className="stats">
            <div className="stats-value">
              {stats.map((stat, idx) => (
                <div key={`stat-${idx}`}>
                  <span>{stat}</span>
                </div>
              ))}
            </div>
            <div className="stats-name">
              {statsName.map((statName, idx) => (
                <p key={`stats-name-${idx}`}>{statName}</p>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* small list information - make separate component */}
      <div
        className="right"
        onClick={handleModalOpen}
        onMouseOver={() => setIsShown(true)}
        onMouseOut={() => setIsShown(false)}
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
      {modalIsOpen && (
        <Modal
          id={id}
          name={name}
          image={image}
          pokemonStats={pokemonStats}
          stats={stats}
          statsName={statsName}
          type={type}
          handleClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default PokemonCard;
