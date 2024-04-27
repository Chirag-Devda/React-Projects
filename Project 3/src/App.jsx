import "./App.css";
import StartGame from "./Components/StartGame/StartGame";
import PlayGame from "./Components/PlayGame/PlayGame";
import { useState } from "react";

function App() {
  const [Gamepage, setGamepage] = useState(false);

  function toggled() {
    setGamepage((prevState) => !prevState);
  }

  return <>{Gamepage ? <PlayGame /> : <StartGame toggle={toggled} />}</>;
}

export default App;
