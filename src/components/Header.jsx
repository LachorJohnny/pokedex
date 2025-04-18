const Header = (props) => {
  const { handleToggleMenu } = props;

  return (
    <header>
      <button className="open-nav-button" onClick={handleToggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <h1 className="text-gradient">Pokedéx</h1>
    </header>
  );
};

export default Header;
