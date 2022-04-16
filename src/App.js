import "./App.css";
import useApplicationData from "./hooks/useApplicationData";
import Card from "./components/Card";
import Loading from "./components/Loading";

function App() {
  const { state } = useApplicationData();
  console.log(state);
  const cardList = state.map((each) => {
    return <Card key={each.id} {...each} />;
  });
  return (
    <div className="App">
      {state.isReady ? (
        <Loading />
      ) : (
        <main className="main-app">
          <h1 className="title">Welcome To Spacetagram</h1>
          <p className="description">Brought to you from NASA API</p>
          <section className="grid-container">{cardList}</section>
        </main>
      )}
    </div>
  );
}

export default App;
