import React from "react";
import { PageHeader } from "antd";
import styles from "./index.module.scss";
import image from "./background.png";

const Header = () => {
  return (
    <div className={styles.Header}>
      <PageHeader title="Pokémon Card Finder">
        <img className={styles.Image} alt="example" src={image} />
      </PageHeader>
    </div>
  );
};

export default Header;
