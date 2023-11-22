import { useState } from "react";

import PokeListItem from "../pokelistitem";
import Modal from "../modal";
import { typeColor } from "../../constants/colors";
import "./pokecard.css";

const Pokemon = ({ pokemonStats, id, image, name, type, stats, statsName }) => {
  const [isShown, setIsShown] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  const handleCardShown = (boolean) => {
    setIsShown(boolean);
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
      <PokeListItem
        name={name}
        image={image}
        id={id}
        handleModalOpen={handleModalOpen}
        handleShown={handleCardShown}
      />
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

export default Pokemon;
