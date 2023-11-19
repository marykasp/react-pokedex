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
        <div className="show">
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
          <img src={image} alt={name} />
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
