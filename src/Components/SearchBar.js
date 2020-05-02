import React, { useState } from "react";
import { Input } from "antd";

import "../Styles/searchbar.css";

const { Search } = Input;

export default function SearchBar(props) {
  const [value, setValue] = useState("Pikachu");

  return (
    <div>
      <div className="search">
        <Search
          id="searchBar"
          placeholder="Pokémon name:"
          enterButton="Search"
          size="large"
          style={{ width: 500 }}
          onChange={(e) => setValue(e.target.value)}
          onSearch={() => props.fetchPokemon(value)}
        />
      </div>
    </div>
  );
}
