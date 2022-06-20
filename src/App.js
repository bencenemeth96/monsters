import CreateMonster from "components/CreateMonster/CreateMonster";
import Header from "components/Header/Header";
import { useState } from "react";
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([]);

  const addMonster = (newMonster) => {
    setMonsters((oldArray) => [...oldArray, newMonster]);
  };

  return (
    <div className="container">
      <Header />
      <CreateMonster createNewMonster={addMonster} />
    </div>
  );
}

export default App;
