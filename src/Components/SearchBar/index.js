import React, { useState } from "react";
import { Input } from "antd";

import styles from "./index.module.scss";

const { Search } = Input;

const SearchBar = ({ fetchPokemon, search }) => {
  const [value, setValue] = useState(search);

  return (
    <div>
      <div className={styles.Container}>
        <Search
          className={styles.SearchBar}
          placeholder="Pokémon name:"
          defaultValue={search}
          enterButton="Search"
          size="large"
          onChange={(e) => setValue(e.target.value)}
          onSearch={() => fetchPokemon(value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
