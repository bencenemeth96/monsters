import Card from "components/Card/Card";
import CreateMonster from "components/CreateMonster/CreateMonster";
import Header from "components/Header/Header";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  const addMonster = (newMonster) => {
    setMonsters((oldArray) => [...oldArray, newMonster]);
  };

  const deleteMonsterHandler = (id) => {
    const monstersCopy = [...monsters];

    setMonsters(monstersCopy.filter((monster) => monster.id !== id));
  };

  useEffect(() => {
    setFilteredMonsters(monsters);
  }, [monsters]);

  const filterMonsters = (e) => {
    const keyword = e.target.value;

    const results = [...monsters].filter((user) => {
      return user.name.toLowerCase().startsWith(keyword.toLowerCase());
    });

    setFilteredMonsters(results);
  };
  return (
    <div className="container">
      <Header />
      <CreateMonster createNewMonster={addMonster} />
      {<input type="text" onChange={filterMonsters} />}
      {!!monsters.length &&
        filteredMonsters.map((monster, i) => (
          <Card
            monster={monster}
            key={i}
            deleteMonster={deleteMonsterHandler}
          />
        ))}
      {!monsters.length && <div>No monsters.</div>}
    </div>
  );
}

export default App;
