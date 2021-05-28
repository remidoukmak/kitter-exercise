import "./styles.css";
import meows from "./meows.json";
import Meow from "./components/Meow";

export default function App() {
  return (
    <div className="App">
      <h1>Kitter</h1>
      {meows.map((meow) => (
        <Meow {...meows[0]} />
      ))}
    </div>
  );
}
