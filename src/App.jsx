import "./App.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Data from "../data.js";

function App() {
  let travelData = Data.map((trip) => {
    return <Card data={trip} key={trip.key} />;
  });
  return (
    <div className="app--container">
      <Nav />
      {travelData}
    </div>
  );
}

export default App;
