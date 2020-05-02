import React from "react";
import Header from "../Components/Header";
import BackButton from "../Components/BackButton";
import { Card } from "antd";

import "../Styles/Pokemon.css";

export default function Pokemon(props) {
  return (
    <>
      <Header></Header>
      <div className="button">
        <BackButton i value={props.location.state.card.name} />
      </div>

      <div className="container">
        <img
          id="card"
          alt="example"
          src={props.location.state.card.card.imageUrlHiRes}
        />
        <Card
          id="cardInfo"
          title={props.location.state.card.card.name}
          bodyStyle={{ backgroundColor: "rgb(254, 225, 175)", border: 10 }}
          bordered={false}
          style={{ width: 300 }}
        >
          <p>
            <label>Pokedex Number: </label>
            {props.location.state.card.card.nationalPokedexNumber}
            <br />
            <label> Type: </label> {props.location.state.card.card.types}
            <br />
            <label> Evolves from: </label>{" "}
            {props.location.state.card.card.series}
            <br />
            <label> Subtype: </label>
            {props.location.state.card.card.subtype}
            <br />
            <label> Set: </label>
            {props.location.state.card.card.set}
            <br />
            <label> Rarity : </label> {props.location.state.card.card.rarity}
            <br />
            <label> Artist : </label> {props.location.state.card.card.artist}
          </p>
        </Card>
      </div>
    </>
  );
}
