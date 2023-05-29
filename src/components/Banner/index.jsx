import banner from "../../assets/banner.png";
import styles from "./Banner.module.scss";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <h1>The most complete photo gallery of space</h1>
      <img src={banner} alt="space banner" />
    </div>
  );
}
