import Img from "components/Img/Img";
import { elements } from "constans/elements";
import { useState } from "react";
import styles from "./CreateMonster.module.css";

const CreateMonster = ({ createNewMonster }) => {
  const [element, setElement] = useState("water");
  const [attack, setAttack] = useState(1);
  const [defense, setDefense] = useState(1);
  const [name, setName] = useState("");

  const monsterElement = elements;

  const setMonsterAttack = (value) => {
    setAttack(parseInt(value));
  };

  const setDefenseAttack = (value) => {
    setDefense(parseInt(value));
  };
  const setMonsterName = (name) => {
    setName(name);
  };

  const setMonsterElement = (index) => {
    setElement(monsterElement[index]);
  };

  const createMonster = () => {
    if (attack > 0 && defense > 0) {
      const monster = { name, attack, defense, element };
      createNewMonster(monster);
    }
  };
  return (
    <div className={styles.create}>
      <div className={styles.selector}>
        <Img name="arrow-left" onClick={() => setMonsterElement(0)}></Img>
        <Img name={element || "water"}></Img>
        <Img name="arrow-right" onClick={() => setMonsterElement(1)}></Img>
      </div>
      <div>
        <div>name</div>
        <input
          type="text"
          onChange={(e) => setMonsterName(e.target.value)}
          value={name}
          placeholder="Type name here..."
        />
      </div>
      <div className={styles.points}>
        <div className={styles.attack}>
          <Img name="attack"></Img>
          <input
            min={1}
            type="number"
            name="attack"
            value={attack}
            onChange={(e) => setMonsterAttack(e.target.value)}
          />
        </div>
        <div className={styles.defense}>
          <Img name="defense"></Img>
          <input
            min={1}
            type="number"
            name="defense"
            value={defense}
            onChange={(e) => setDefenseAttack(e.target.value)}
          />
        </div>
      </div>
      <button onClick={createMonster}>Create</button>
    </div>
  );
};

export default CreateMonster;
