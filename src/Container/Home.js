import React, { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import PokemonCard from "../Components/PokemonCard";
import Header from "../Components/Header";
import { useHistory } from "react-router-dom";
import "../Styles/app.css";

function Home() {
  const history = useHistory();

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

  const handleOpen = (card) => {
    history.push({
      pathname: "/Pokemon",
      state: { card },
    });
  };

  return (
    <div className="Home">
      <Header />
      <SearchBar fetchPokemon={fetchPokemon} returnedCards={returnedCards} />
      {returnedCards.length > 0 ? (
        <PokemonCard returnedCards={returnedCards} handleOpen={handleOpen} />
      ) : (
        <div id="noMatches">
          <p>No matches found...check Pokémon spelling</p>
        </div>
      )}
    </div>
  );
}

export default Home;
