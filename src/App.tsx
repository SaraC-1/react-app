import "./styles/styles.scss";
import Header from "./components/header";
import Navigation from "./components/navigation";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <div className="container">Hello world!</div>
    </div>
  );
};
export default App;
