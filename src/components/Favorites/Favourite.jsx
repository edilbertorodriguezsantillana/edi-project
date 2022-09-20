import saladImage from "../../img/logo_ensaladas.png";
import starsImage from "../../img/estrellas.png";

const Favourite = ({ name, description }) => {
  return (
    <div className="favorito">
      <div className="favorito__grid">
        <div className="favorito__imagen">
          <img src={saladImage} alt="logo restaurant" />
        </div>

        <div className="favorito__contenido">
          <img src={starsImage} alt="calificacion restaurant" />

          <h3 className="favorito__nombre">{name}</h3>
          <p className="favorito__descripcion">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Favourite;
