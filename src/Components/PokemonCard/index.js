import React from "react";
import { Card } from "antd";
import styles from "./index.module.scss";
const { Meta } = Card;

const PokemonCard = ({ returnedCards, handleOpen }) => {
  return (
    <div>
      <div className={styles.Cards}>
        {returnedCards.map((card) => (
          <div className={styles.Card} key={card.id}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={card.imageUrlHiRes} />}
              bodyStyle={{ backgroundColor: "rgb(254, 225, 175)" }}
              onClick={() => handleOpen({ card })}
            >
              <Meta title={card.name} description={card.series} />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
