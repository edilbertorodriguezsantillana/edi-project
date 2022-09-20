const HeaderNav = () => {
  return (
    <nav className="navegacion">
      <a href="#" className="navegacion__link">
        Iniciar Sesión
      </a>
      <a href="#" className="navegacion__link">
        Crear Cuenta
      </a>
      <a href="#" className="navegacion__link navegacion__link--registrar">
        Registrar Restaurante
      </a>
    </nav>
  );
};

export default HeaderNav;
