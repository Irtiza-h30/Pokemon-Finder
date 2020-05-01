import React, { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import PokemonCard from "../Components/PokemonCard";
import Header from "../Components/Header";

import "../Styles/app.scss";

function Home() {
  useEffect(() => {
    fetchPokemon("");
  }, []);

  const [returnedCards, setCardValue] = useState([]);

  const fetchPokemon = async (value) => {
    const data = await fetch(
      `https://api.pokemontcg.io/v1/cards?name=${value}`
    );
    const cards = await data.json();
    setCardValue(cards.cards);
  };

  return (
    <div className="Home">
      <Header />
      <SearchBar fetchPokemon={fetchPokemon} returnedCards={returnedCards} />
      {returnedCards.length > 0 ? (
        <PokemonCard returnedCards={returnedCards} />
      ) : (
        <div id="noMatches">
          <p>Loading....Check Pokémon spelling before submitting</p>
        </div>
      )}
      {}
    </div>
  );
}

export default Home;
