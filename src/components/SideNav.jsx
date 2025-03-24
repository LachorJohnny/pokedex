import { first151Pokemon, getFullPokedexNumber } from '../utils';
import { useState } from 'react';

const SideNav = (props) => {
  const { selectedPokemon, setSelectedPokemon, showSideMenu, handleCloseMenu } = props;
  const [searchValue, setSearchValue] = useState('');

  const filteredPokemon = first151Pokemon.filter((pokemon, pokemonIndex) => {
    if (getFullPokedexNumber(pokemonIndex).includes(searchValue)) return true;
    if (pokemon.toLowerCase().includes(searchValue.toLowerCase())) return true;
    return false;
  });

  return (
    <nav className={' ' + (showSideMenu ? 'open' : '')}>
      <div className={'header ' + (showSideMenu ? 'open' : '')}>
        <button className="open-nav-button" onClick={handleCloseMenu}>
          <i className="fa-solid fa-arrow-left-long"></i>
        </button>
        <h1 className="text-gradient">Pokédex</h1>
      </div>
      <input
        type="text"
        placeholder="E.g. 001 or Bulba..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      {filteredPokemon.map((pokemon, pokemonIndex) => {
        return (
          <button
            key={pokemonIndex}
            className={'nav-card ' + (pokemonIndex === selectedPokemon ? 'nav-card-selected' : '')}
            onClick={() => {
              setSelectedPokemon(first151Pokemon.indexOf(pokemon));
              handleCloseMenu();
            }}
          >
            <p>{getFullPokedexNumber(first151Pokemon.indexOf(pokemon))}</p>
            <p>{pokemon}</p>
          </button>
        );
      })}
    </nav>
  );
};

export default SideNav;
