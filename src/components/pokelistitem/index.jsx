import pokeball from "../../assets/pokeball.png";

const PokeListItem = ({ name, image, id, handleModalOpen, handleShown }) => {
  return (
    <div
      className="right"
      onClick={handleModalOpen}
      onMouseOver={() => handleShown(true)}
      onMouseOut={() => handleShown(false)}
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
  );
};

export default PokeListItem;
