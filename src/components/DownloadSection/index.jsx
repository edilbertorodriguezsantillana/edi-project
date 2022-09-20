import DownloadShops from "./DownloadShops";
import appImage from "../../img/app.png";

const DownloadSection = () => {
  return (
    <section className="descargar">
      <div className="descargar__grid contenedor">
        <div className="descargar__imagen">
          <img src={appImage} alt="imagen app" />
        </div>

        <DownloadShops />
      </div>
    </section>
  );
};

export default DownloadSection;
