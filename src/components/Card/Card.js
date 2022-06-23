import Img from "components/Img/Img";
import styles from "./Card.module.css";

const Card = ({ monster, deleteMonster }) => {
  const deleteMonsterHandler = (id) => {
    deleteMonster(id);
  };
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Img name={monster.element}></Img>
      </div>
      <div>{monster.name}</div>
      <div>{monster.attack}</div>
      <div>{monster.defense}</div>

      <div className={styles.icon}>
        <Img
          name={"trash-can"}
          onClick={() => deleteMonsterHandler(monster.id)}
        />
      </div>
    </div>
  );
};

export default Card;
