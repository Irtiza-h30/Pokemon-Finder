import React from "react";
import { LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import Header from "../../Components/Header/index";
import { Card, Button } from "antd";

import styles from "./index.module.scss";

const Pokemon = ({ location }) => {
  console.log(location);

  const history = useHistory();

  const search = location.state.search;
  console.log(search);
  const goBack = () => {
    history.push({
      pathname: "/",
      state: { search },
    });
  };
  return (
    <>
      <Header />
      <div className={styles.backButton}>
        <Button
          className={styles.Button}
          onClick={goBack}
          type="dashed"
          icon={<LeftOutlined />}
        >
          Back to Search
        </Button>
      </div>

      <div className={styles.Container}>
        <img
          className={styles.Card}
          alt="example"
          src={location.state.card.card.imageUrlHiRes}
        />
        <Card
          className={styles.cardInfo}
          title={location.state.card.card.name}
          bodyStyle={{ backgroundColor: "rgb(254, 225, 175)", border: 10 }}
          bordered={false}
        >
          <div>
            <label>Pokedex Number: </label>
            {location.state.card.card.nationalPokedexNumber}
            <br />
            <label> Type: </label> {location.state.card.card.types}
            <br />
            <label> Evolves from: </label>
            {location.state.card.card.evolvesFrom}
            <br />
            <label> Series: </label>
            {location.state.card.card.series}
            <br />
            <label> Subtype: </label>
            {location.state.card.card.subtype}
            <br />
            <label> Set: </label>
            {location.state.card.card.set}
            <br />
            <label> Rarity : </label> {location.state.card.card.rarity}
            <br />
            <label> Artist : </label> {location.state.card.card.artist}
          </div>
        </Card>
      </div>
    </>
  );
};
export default Pokemon;