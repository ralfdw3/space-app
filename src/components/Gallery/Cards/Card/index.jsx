import React from "react";
import favorite from "./favorite.png";
import open from "./open.png";

export default function Card({ item, styles }) {
  return (
    <li className={styles.gallery__card}>
      <img
        className={styles.gallery__image}
        src={item.image}
        alt={item.title}
      />
      <p className={styles.gallery__description}>{item.title}</p>
      <div>
        <p>{item.credit}</p>
        <span>
          <img src={open} alt="expand icon" />
          <img src={favorite} alt="like icon" />
        </span>
      </div>
    </li>
  );
}
