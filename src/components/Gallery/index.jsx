import React from "react";
import Tags from "../Tags";
import Cards from "./Cards";
import photos from "./photos.json";
import styles from "./Gallery.module.scss";
import { useState } from "react";

export default function Gallery() {
  const [items, setItems] = useState(photos);
  const tags = [...new Set(photos.map((value) => value.tag))];

  const photosFilter = (tag) => {
    const newPhotos = photos.filter((photo) => {
      return photo.tag === tag;
    });
    setItems(newPhotos);
  };

  return (
    <section className={styles.gallery}>
      <h2>Browse the gallery</h2>
      <Tags tags={tags} photosFilter={photosFilter} setItems={setItems} />
      <Cards items={items} styles={styles} />
    </section>
  );
}
