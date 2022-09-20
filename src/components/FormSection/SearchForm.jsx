const SearchForm = () => {
  return (
    <form className="formulario__buscar">
      <div className="formulario__campo">
        <label htmlFor="restaurant" className="formulario__label">
          Restaurant
        </label>
        <input
          id="restaurant"
          className="formulario__input"
          placeholder="Tacos México"
        />
      </div>
      <div className="formulario__campo">
        <label htmlFor="platillo" className="formulario__label">
          Platillo
        </label>
        <input
          id="platillo"
          className="formulario__input"
          placeholder="Pizza, Ensalada, Hamburguesa"
        />
      </div>
      <input type="submit" className="formulario__submit" value="Buscar" />
    </form>
  );
};

export default SearchForm;
