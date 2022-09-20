import appleShop from "../../img/tienda-apple.svg";
import androidShop from "../../img/tienda-android.svg";

const DownloadShops = () => {
  return (
    <div className="tiendas">
      <h3 className="tiendas__heading">Descarga la App</h3>
      <p className="tiendas__texto">Disponible para Android y iOS</p>

      <div className="tiendas__grid">
        <a href="#" className="tiendas__enlace">
          <img src={appleShop} alt="tienda apple" />
        </a>
        <a href="#" className="tiendas__enlace">
          <img src={androidShop} alt="tienda android" />
        </a>
      </div>
    </div>
  );
};

export default DownloadShops;
