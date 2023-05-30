import React from "react";
import popularPhotos from "./photos-popular.json";
import styles from "./Popular.module.scss";

export default function Popular() {
  return (
    <aside className={styles.popular}>
      <h2>Most popular</h2>
      <ul className={styles.popular__image}>
        {popularPhotos.map((photo) => {
          return (
            <li key={photo.id}>
              <img src={photo.path} alt={photo.alt} />
            </li>
          );
        })}
      </ul>
      <button>See more</button>
    </aside>
  );
}
