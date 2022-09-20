import StepsImages from "./StepsImages";
import waveImage from "../../img/wave.svg";

const StepsSection = () => {
  return (
    <section className="pasos">
      <img className="pasos__wave" src={waveImage} alt="imagen wave" />

      <div className="pasos__contenido">
        <h2 className="pasos__heading">
          ¿Cómo funciona?{" "}
          <span className="pasos__heading--descripcion">
            tan fácil como 1,2 y 3
          </span>
        </h2>
        <StepsImages />
      </div>
    </section>
  );
};

export default StepsSection;
