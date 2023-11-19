import "./modal.css";
import pokeball from "../../assets/pokeball.png";

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
    <div className="pokemon-modal" onClick={handleClose}>
      Modal
    </div>
  );
};

export default Modal;
