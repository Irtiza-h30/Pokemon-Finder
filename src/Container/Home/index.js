import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import SearchBar from "../../Components/SearchBar/index";
import PokemonCard from "../../Components/PokemonCard/index";
import Header from "../../Components/Header/index";
import { useHistory } from "react-router-dom";
import styles from "./index.module.scss";

const Home = ({ location }) => {
  const history = useHistory();

  const [returnedCards, setReturnedCards] = useState([]);
  const [search, setSearch] = useState(location ? location.state.search : "");

  useEffect(() => {
    fetchPokemon(search);
  }, [search]);

  const fetchPokemon = async (value) => {
    const data = await fetch(
      `https://api.pokemontcg.io/v1/cards?name=${value}`
    );
    setSearch(value);
    const cards = await data.json();
    setReturnedCards(cards.cards);
  };

  const handleOpen = (card) => {
    history.push({
      pathname: "/pokemon",
      state: { card, search },
    });
  };

  return (
    <div>
      <Header />
      <SearchBar
        fetchPokemon={fetchPokemon}
        returnedCards={returnedCards}
        initialVal={search}
      />
      {returnedCards.length > 0 ? (
        <PokemonCard returnedCards={returnedCards} handleOpen={handleOpen} />
      ) : (
        <div className={styles.Container}>
          <Spin size="large" />
        </div>
      )}
    </div>
  );
};

export default Home;
