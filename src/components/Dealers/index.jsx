import dealerImage from "../../img/repartidor.jpg";
import DealersContent from "./DealersContent";

const Dealers = ({ title }) => {
  return (
    <section className="repartidores">
      <h2 className="repartidores__heading">{title}</h2>

      <div className="repartidores__grid contenedor">
        <div className="repartidores__imagen">
          <img src={dealerImage} alt="imagen repartidor" />
        </div>

        <DealersContent />
      </div>
    </section>
  );
};

export default Dealers;
