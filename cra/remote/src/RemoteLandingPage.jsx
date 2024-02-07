import React, { useState, useEffect } from 'react';
import HeaderShared from '../../sharedComponents/src/Header';
import FooterShared from '../../sharedComponents/src/Footer';
import './RemoteLandingPage.css'; 

const RemoteLandingPage = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const jsonData = await response.json();
        setPokemonList(jsonData.results);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData(); 
  }, []);

  return (
    <div>
      <HeaderShared />
      <h1>Bienvenue sur la page d'accueil à distance</h1>
      <div className="pokemon-list">
        <h2>Liste de Pokémon</h2>
        <div className="pokemon-cards">
          {pokemonList.map((pokemon, index) => (
            <div className="card" key={index}>
              <img className="pokemon-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
              <div className="pokemon-details">
                <strong>{pokemon.name}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterShared />
    </div>
  );
};

export default RemoteLandingPage;
