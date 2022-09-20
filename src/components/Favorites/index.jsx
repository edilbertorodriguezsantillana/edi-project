import { favoriteRestaurants } from "../../data";
import Favourite from "./Favourite";

const Favorites = ({ title }) => {
  return (
    <main className="favoritos">
      <h2 className="favoritos__heading">{title}</h2>

      <div className="favoritos__grid contenedor">
        {favoriteRestaurants.map(({ id, ...restaurant }) => (
          <Favourite key={id} {...restaurant} />
        ))}
      </div>
    </main>
  );
};

export default Favorites;
