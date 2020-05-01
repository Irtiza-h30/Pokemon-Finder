import React from "react";
import { Card } from "antd";
import "../Styles/card.css";
const { Meta } = Card;

export default function PokemonCard(props) {
  return (
    <div>
      <div className="cards">
        {props.returnedCards.map((card) => (
          <div className="card" key={card.id}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={card.imageUrlHiRes} />}
              bodyStyle={{ backgroundColor: "rgb(254, 225, 175)", border: 10 }}
            >
              <Meta title={card.name} description={card.series} />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
