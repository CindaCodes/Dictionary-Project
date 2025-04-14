import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">
          <h1 className="App-title">Wordly Wise</h1>
          <h3>Your go-to dictionary for all things word-related!</h3>
          <hr />
        </header>
        <main>
          <Dictionary />
        </main>
        <Footer />
      </div>
    </div>
  );
}
