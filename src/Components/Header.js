import React from "react";
import { PageHeader } from "antd";
import image1 from "../Styles/background.png";
import "../Styles/searchbar.css";

export default function Header() {
  return (
    <div>
      <PageHeader
        id="header"
        className="site-page-header"
        title="Pokémon Card Finder"
      />
      <img id="image" alt="example" src={image1} />
    </div>
  );
}
