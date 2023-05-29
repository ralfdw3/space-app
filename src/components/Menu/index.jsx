import styles from "./Menu.module.scss";
import React from "react";
import home from "../../assets/home.png";
import mostViewed from "../../assets/most-viewed.png";
import mostLiked from "../../assets/most-liked.png";
import news from "../../assets/news.png";
import surpriseMe from "../../assets/surprise-me.png";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <img src={home} alt="" />
          <a href="/">Home</a>
        </li>
        <li className={styles.menu__item}>
          <img src={mostViewed} alt="" />
          <a href="/">Most viewed</a>
        </li>
        <li className={styles.menu__item}>
          <img src={mostLiked} alt="" />
          <a href="/">Most liked</a>
        </li>
        <li className={styles.menu__item}>
          <img src={news} alt="" />
          <a href="/">News</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpriseMe} alt="" />
          <a href="/">Surprise me</a>
        </li>
      </ul>
    </nav>
  );
}
