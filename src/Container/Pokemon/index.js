import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
import Header from "../../Components/Header/index";
import { Card, Button } from "antd";

import styles from "./index.module.scss";

const Pokemon = ({ location }) => {
  const [card, setCard] = useState(
    JSON.parse(localStorage.getItem("card")) || []
  );

  const status =
    (location &&
      location.state &&
      location.state.card &&
      location.state.card.card) ||
    {};

  useEffect(() => {
    if (status) {
      localStorage.setItem("cards", JSON.stringify(card));
      setCard(status);
    } else {
      setCard(localStorage.getItem("card"));
      if (card) setCard(JSON.parse(card));
    }
  }, [status, card]);

  return (
    <>
      <Header />
      <div className={styles.backButton}>
        <Link to="/">
          <Button
            className={styles.Button}
            type="dashed"
            icon={<LeftOutlined />}
          >
            Back to Search
          </Button>
        </Link>
      </div>

      <div className={styles.Container}>
        <img className={styles.Card} alt="example" src={card.imageUrlHiRes} />
        <Card
          className={styles.cardInfo}
          title={card.name}
          headStyle={{ backgroundColor: "rgb(252, 239, 202)", border: 10 }}
          bodyStyle={{ backgroundColor: "rgb(254, 225, 175)", border: 10 }}
          bordered={false}
        >
          <div>
            {card.nationalPokedexNumber && (
              <>
                <label>Pokedex Number: </label>
                {card.nationalPokedexNumber}
                <br />
              </>
            )}
            {card.types && (
              <>
                <label> Type: </label> {card.types}
                <br />
              </>
            )}
            {card.evolvesFrom && (
              <>
                <label> Evolves from: </label>
                {card.evolvesFrom}
                <br />
              </>
            )}
            <label> Series: </label>
            {card.series}
            <br />
            <label> Subtype: </label>
            {card.subtype}
            <br />
            <label> Set: </label>
            {card.set}
            <br />
            <label> Rarity : </label> {card.rarity}
            <br />
            {card.artist && (
              <>
                <label> Artist : </label> {card.artist}
              </>
            )}
          </div>
        </Card>
      </div>
    </>
  );
};
export default Pokemon;
