import logo from "./logo-shecodes.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main><Dictionary /></main>
      <footer className="text-center">Coded by Jacinda Bietz</footer>
      </div>
    </div>
  );
}
