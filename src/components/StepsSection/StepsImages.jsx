import step1Image from "../../img/paso_1.png";
import step2Image from "../../img/paso_2.png";
import step3Image from "../../img/paso_3.png";

const StepsImages = () => {
  return (
    <div className="pasos__grid contenedor">
      <div className="pasos__paso">
        <img className="pasos__imagen" src={step1Image} alt="imagen paso app" />
      </div>
      <div className="pasos__paso">
        <img className="pasos__imagen" src={step2Image} alt="imagen paso app" />
      </div>
      <div className="pasos__paso">
        <img className="pasos__imagen" src={step3Image} alt="imagen paso app" />
      </div>
    </div>
  );
};

export default StepsImages;
