import React from "react";
import styles from "./Tags.module.scss";
import photos from "../Gallery/photos.json";

export default function Tags({ tags, photosFilter, setItems }) {
  return (
    <div className={styles.tags}>
      <p>Filter by tags:</p>
      <ul className={styles.tags__list}>
        {tags.map((tag) => {
          return (
            <li key={tag} onClick={() => photosFilter(tag)}>
              {tag}
            </li>
          );
        })}
        <li onClick={() => setItems(photos)}>All</li>
      </ul>
    </div>
  );
}
