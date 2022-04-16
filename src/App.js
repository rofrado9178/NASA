import "./App.css";
import useApplicationData from "./hooks/useApplicationData";
import Card from "./components/Card";
import Loading from "./components/Loading";

function App() {
  const { state } = useApplicationData();
  console.log(state);
  const nv = process.env.API_KEY;
  console.log(nv);

  const cardList = state.map((each) => {
    return <Card key={each.id} {...each} />;
  });
  return <div className="App">{state.isReady ? <Loading /> : cardList}</div>;
}

export default App;
