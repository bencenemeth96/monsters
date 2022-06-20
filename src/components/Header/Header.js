import Img from "components/Img/Img";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Img name={"logo"}></Img>
      <h1 className="header-title">Monsters</h1>
    </div>
  );
};

export default Header;
