import React, { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import PokemonCard from "./Components/PokemonCard";

import "./Styles/app.css";

function App() {
  useEffect(() => {
    fetchPokemon();
  }, []);

  const [returnedCards, setCardValue] = useState([]);
  const [matchesFound, setMatches] = useState(true);

  const fetchPokemon = async (value) => {
    const data = await fetch(
      `https://api.pokemontcg.io/v1/cards?name=${value}`
    );
    const cards = await data.json();
    setCardValue(cards.cards);
    setMatches(true);

    if (cards.cards.length === 0) {
      setMatches(false);
    }
  };

  return (
    <div className="App">
      <SearchBar fetchPokemon={fetchPokemon} returnedCards={returnedCards} />
      {matchesFound ? (
        <PokemonCard returnedCards={returnedCards} />
      ) : (
        <div id="noMatches">
          <p>Loading....Check Pokémon spelling before submitting</p>
        </div>
      )}
    </div>
  );
}

export default App;
