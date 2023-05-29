import React from "react";
import styles from "./Tags.module.scss";

export default function Tags() {
  return (
    <div className={styles.tags}>
      <p>Filter by tags:</p>
      <ul className={styles.tags__list}>
        <li>Star</li>
        <li>Galaxy</li>
        <li>Moon</li>
        <li>Planets</li>
      </ul>
    </div>
  );
}
