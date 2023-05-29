import React from "react";
import Tags from "../Tags";
import Cards from "./Cards";
import photos from "./photos.json";
import styles from "./Gallery.module.scss";

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <h2>Browse the gallery</h2>
      <Tags />
      <Cards items={photos} styles={styles} />
    </section>
  );
}
