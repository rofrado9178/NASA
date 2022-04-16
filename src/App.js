import "./App.css";
import useApplicationData from "./hooks/useApplicationData";
import Card from "./components/Card";

function App() {
  const { state } = useApplicationData();
  console.log(state);

  const cardList = state.map((each) => {
    return <Card {...each} />;
  });
  return <div className="App">{cardList}</div>;
}

export default App;
