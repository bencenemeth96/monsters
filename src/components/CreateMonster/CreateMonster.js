import Img from "components/Img/Img";
import { elements } from "constans/elements";
import { useState } from "react";
import styles from "./CreateMonster.module.css";

const CreateMonster = ({ createNewMonster }) => {
  const [element, setElement] = useState("fire");

  const [attack, setAttack] = useState(1);
  const [defense, setDefense] = useState(1);
  const [name, setName] = useState("");

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
    if (index === "decrement") {
      const nextIndex = elements.indexOf(element) - 1;

      setElement(elements[nextIndex === -1 ? 3 : nextIndex]);
    } else {
      const nextIndex = elements.indexOf(element) + 1;
      setElement(elements[nextIndex === 4 ? 0 : nextIndex]);
    }
  };

  const createMonster = () => {
    if (name.length > 0) {
      const id = Math.random() * 10;
      const monster = { name, attack, defense, element, id };
      createNewMonster(monster);

      setName("");
      setDefense(1);
      setAttack(1);
    }
  };
  return (
    <div className={styles.create}>
      <div className={styles.selector}>
        <Img
          name="arrow-left"
          onClick={() => setMonsterElement("decrement")}
        ></Img>
        <Img name={element || "water"}></Img>
        <Img
          name="arrow-right"
          onClick={() => setMonsterElement("increment")}
        ></Img>
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
